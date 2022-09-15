import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Redirecting = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Box
      bgcolor={"primary.light"}
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Redirecting...</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
};

export default Redirecting;
