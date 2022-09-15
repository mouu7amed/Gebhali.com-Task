import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Box,
  Stack,
  Typography,
  Divider,
  Rating,
  Button,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { useCtx } from "../../context/Provider";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Head from "next/head";

const ProductId = () => {
  const router = useRouter();
  const productId: any = router.query.productId;
  const { products } = useCtx();
  const [product, setProduct] = useState<any>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const currentProduct = products?.filter(
      (item: any) => item.id === parseInt(productId)
    );
    !!currentProduct && setProduct(currentProduct[0]);
  }, [router, products, productId]);

  return (
    <Box>
      <Head>
        <title>{product?.title}</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      {!!product && (
        <Box
          p={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box flexBasis={"50%"} sx={{ paddingRight: { xs: 2, lg: 0 } }}>
            <Image
              loader={() => product.image}
              src={product.image}
              width="500"
              height="500"
              alt={`Product ${product.id}`}
              unoptimized={true}
            />
          </Box>
          <Stack flexBasis={"50%"}>
            <Typography
              color="#317bfe"
              textTransform="uppercase"
              fontWeight={600}
            >
              {product.category}
            </Typography>
            <Typography
              fontSize={{ xs: "1rem", md: "1.5rem" }}
              sx={{ margin: "1rem 0" }}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" color="GrayText">
              {product.description}
            </Typography>
            <Stack direction={"row"} alignItems="center">
              <Rating
                name="read-only"
                value={product.rating.rate}
                readOnly
                size="medium"
                sx={{ mb: 1, mt: 1 }}
              />
              <Typography sx={{ ml: 1 }} color="gray">
                ({product.rating.count})
              </Typography>
            </Stack>
            <Divider />
            <Typography variant="body2" sx={{ mt: 2 }}>
              Color
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <Box
                sx={{
                  bgcolor: "black",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "1px solid #fff",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              />
              <Box
                sx={{
                  bgcolor: "red",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "1px solid #fff",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              />
              <Box
                sx={{
                  bgcolor: "blue",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "1px solid #fff",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Quantity
            </Typography>
            <Stack direction="row" alignItems="center">
              <IconButton onClick={() => setQuantity(quantity - 1)}>
                <RemoveIcon />
              </IconButton>
              <input
                style={{ textAlign: "center", width: 50, height: 30 }}
                readOnly
                value={quantity}
              />
              <IconButton onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="flex-start"
              alignItems={"center"}
              p={"1rem 0"}
              mt={1}
            >
              <Typography fontWeight={"bold"} fontSize="1.5rem" color="gray">
                {product.price}
                <span>$</span>
              </Typography>
              <Button
                variant="contained"
                disableElevation
                color="success"
                sx={{ ml: 2 }}
              >
                Add to cart
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ProductId;
