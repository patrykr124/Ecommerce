import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Contact from "../../components/Contact/Contact.jsx";

function Home() {
  return (
    <div>
      <Slider />
      <div className="bg-white">
        <FeaturedProducts type="featured" />
        <Categories />
        <FeaturedProducts type="trending" />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
