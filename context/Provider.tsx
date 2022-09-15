import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { cartType, productType, userType } from "../utils/types";

type providerProps = {
  children: React.ReactNode;
};

const AppCtx = createContext<any>({});

export const Provider = ({ children }: providerProps) => {
  const [products, setProducts] = useState<productType[]>();
  const [userCart, setUserCart] = useState<cartType[]>();
  const [users, setUsers] = useState<userType[]>();
  const [currentUser, setCurrentUser] = useState<userType | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const UID: any = typeof window !== "undefined" && localStorage.getItem("uid");
  const BASE_URL = "https://fakestoreapi.com";

  const fetchData = async (query: string) => {
    const response = await axios.get(`${BASE_URL}${query}`);
    const { data } = await response;
    return data;
  };

  useEffect(() => {
    fetchData(`/products`).then((products) => {
      setProducts(products);
    });

    fetchData(`/users`).then((users) => {
      setUsers(users);
    });

    !!currentUser &&
      fetchData(`/carts/user/${currentUser.id}`).then((userCart) => {
        setUserCart(userCart);
      });
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = () => {
      const user = users?.find((user: userType) => user.id === parseInt(UID));
      !!user && setCurrentUser(user);
    };

    unsubscribe();
  }, [users, UID]);

  const login = (email: string, password: string) => {
    const user: any = users?.find((user: userType) => user.email === email);
    if (user.email === email && user.password === password) {
      localStorage.setItem("uid", user.id.toString());
    } else {
      throw new Error("Incorrect Email or Password");
    }
  };

  const logout = () => {
    !!UID && localStorage.removeItem("uid");
    setCurrentUser(null);
    window.location.reload();
  };

  return (
    <AppCtx.Provider
      value={{
        products,
        userCart,
        login,
        logout,
        currentUser,
        cartOpen,
        setCartOpen,
        fetchData,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const useCtx = () => {
  return useContext(AppCtx);
};
