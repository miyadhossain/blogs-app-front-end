import React from "react";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
