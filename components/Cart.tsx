import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import Image from "next/image";
import { productType } from "../utils/types";
import { useCtx } from "../context/Provider";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const { userCart, cartOpen, setCartOpen, products } = useCtx();
  const [cartProducts, setCartProducts] = useState<productType[]>();

  useEffect(() => {
    !!userCart &&
      setCartProducts(
        products.filter((product: any) =>
          userCart[0]?.products
            .map((item: any) => item.productId)
            .includes(product.id)
        )
      );
  }, [products, userCart]);

  // const handleRemove = (productId) => {
  //   return removeFromCart(dispatch, productId);
  // };

  // const handleProceedCheckout = () => {
  //   toggleCartPopup(dispatch);
  //   history.push("/checkout");
  // };

  return (
    <Box
      width={350}
      height={400}
      className="cart"
      display={cartOpen ? "block" : "none"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => setCartOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      {!cartProducts && (
        <Typography
          color="error"
          sx={{ ml: 2, mr: 2, textAlign: "center", fontSize: "1.5rem" }}
        >
          Empy!
        </Typography>
      )}

      <Stack justifyContent="space-between" height="calc(100% - 40px)">
        <Box>
          {cartProducts?.map((product) => {
            return (
              <ListItem disablePadding key={product.id}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={product.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      product.title.length < 20
                        ? product.title
                        : product.title.slice(0, 20) + "..."
                    }
                  />
                  <Typography fontWeight={550} sx={{ mr: 2 }}>
                    {
                      userCart[0].products.find(
                        (item: any) => item.productId === product.id
                      ).quantity
                    }
                  </Typography>
                  <IconButton
                    onClick={() => {
                      // handleRemove(product.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            color="info"
            sx={{ width: "100%" }}
            // onClick={handleProceedCheckout}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
