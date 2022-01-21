import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";

import AppBar from "../components/NavBar";
import SectionOne from "../components/SectionHomeOne";
import Sectiontwo from "../components/SectionHomeTwo";
import SectionThree from "../components/SectionHomeThree";
import SectionFour from "../components/SectionHomeFour";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Challenge Empresa Tractian" />
      </Head>
      <AppBar HeadTitle="TRACTIAN | Home" />
      <Container maxWidth="xl">
        <SectionOne />
        <Sectiontwo />
        <SectionThree />
        <SectionFour />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
