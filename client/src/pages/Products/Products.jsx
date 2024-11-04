import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import MaxWithWrapper from "../../components/MaxWithWrapper";
import { useFetch } from "../../Hooks/usefetch";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sort, setSort] = useState("asc");
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { products, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

 
  return (
    <MaxWithWrapper>
      <div className="products flex gap-2 py-20">
        <div className="left flex flex-col flex-1">
          <div className="filteritems sticky top-36 gap-4 flex flex-col">
            <div className="filterItem flex flex-col gap-1">
              <span className="filterCategory">Product Categories</span>
              {products?.map((product) => (
                <div key={product.id} className="inputItem flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id={product.id}
                    value={product.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={product.id}>{product.attributes.title}</label>
                </div>
              ))}
            </div>
            <div className="filterItem ">
              <span className="filterFilter">Filter by price</span>
              <div className="inputItem">
                <span>0</span>
                <input
                  type="range"
                  min="0"
                  max="200"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filterItem flex flex-col gap-1">
              <span className="filterPrice">Sort by price</span>
              <div className="inputItem flex flex-row gap-2">
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={() => setSort("asc")}
                />
                <label htmlFor="asc">Low to high</label>
              </div>
              <div className="inputItem flex flex-row gap-2">
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={() => setSort("desc")}
                />
                <label htmlFor="desc">High to Low</label>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col flex-[4] gap-10">
          <img
            className="w-full h-[250px] object-cover object-center"
            src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product"
          />
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            selectedSubCat={selectedSubCat}
          />
        </div>
      </div>
    </MaxWithWrapper>
  );
}

export default Products;
