export type productType = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
};

export type userType = {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    number: number;
    street: string;
    city: string;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
};

export type cartType = {
  id: number;
  date: string;
  userId: number;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
};
