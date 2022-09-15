import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Divider, Grid } from "@mui/material";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useCtx } from "../context/Provider";
import { productType } from "../utils/types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Featured = () => {
  const [featuredProducts, setFeaturesProducts] = useState<productType[]>([]);
  const { fetchData } = useCtx();

  useEffect(() => {
    fetchData(`/products?limit=6`).then((items: productType[]) => {
      setFeaturesProducts(items);
    });
  }, [fetchData]);

  return (
    <Box className="featured-products">
      <Stack direction="row" className="head">
        <Typography>Featured Products </Typography>
        <Stack direction="row">
          <Link href="/products">View All Products</Link>
          <KeyboardArrowRightIcon color="warning" />
        </Stack>
      </Stack>
      <Divider />
      <Grid container spacing={3} marginTop={1}>
        {featuredProducts.map((product: productType) => {
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

export default Featured;
