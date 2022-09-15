import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Gebhaly.com</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Box position="relative">
        <Header />
        <Slider />
        <Featured />
        <AboutSection />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
