import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category title="Destaques" />
      <Category title="Lançamentos" />
      <Footer />
    </div>
  );
}

export default App;
