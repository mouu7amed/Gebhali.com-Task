import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { useCtx } from "../../context/Provider";
import { productType } from "../../utils/types";
import Head from "next/head";

const Products = () => {
  const { products } = useCtx();
  return (
    <Box>
      <Head>
        <title>Gebhaly.com - Products</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="2rem"
          textTransform="uppercase"
          sx={{ marginTop: 4 }}
        >
          Products
        </Typography>
      </Box>
      <Grid container spacing={3} marginTop={1} sx={{ p: 2 }}>
        {products?.map((product: productType) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
