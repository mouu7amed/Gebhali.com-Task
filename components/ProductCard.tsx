import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Rating,
} from "@mui/material";
import Link from "next/link";
import { productType } from "../utils/types";

const ProductCard = ({ product }: any) => {
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "325px",
        boxShadow: "none",
        borderRadius: 0,
        border: "1px solid #e2e2e2",
      }}
      className="product-card"
    >
      <Link href={`/products/${product.id}`}>
        <CardMedia
          image={product.image}
          alt={product.category}
          sx={{
            width: "100%",
            height: 150,
            overflow: "hidden",
            cursor: "pointer",
          }}
          component="img"
        ></CardMedia>
      </Link>

      <CardContent className="card-content">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Link href={`/products/${product.id}`}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#557799"
              sx={{ cursor: "pointer" }}
            >
              {product.title.length < 20
                ? product.title
                : product.title.slice(0, 20) + "..."}
            </Typography>
          </Link>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {product.price}
            <span>$</span>
          </Typography>
        </Stack>
        <Stack justifyContent="space-between" height="100%">
          <Typography sx={{ margin: "0.5rem 0" }} variant="subtitle2">
            {product.description.length < 60
              ? product.description
              : product.description.slice(0, 60) + "..."}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="review"
          >
            <Rating
              name="read-only"
              value={product.rating.rate}
              readOnly
              size="medium"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#f33f3f",
                },
              }}
            />
            <Typography variant="body1">
              Reviews ({product.rating.count})
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
