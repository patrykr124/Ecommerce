import React, { useState } from "react";
import MaxWithWrapper from "../../components/MaxWithWrapper";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useFetch } from "../../Hooks/usefetch";
import { useParams, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { products, loading, error } = useFetch(`/products/${id}?populate=*`);
  const { toggleCart } = useOutletContext();
  if (quantity < 1) setQuantity(1);

  const variant = {
    initial: { clipPath: "inset(0% 100% 0 0)" },
    animate: {
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.6,
      },
    },
  };

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: products.id,
        title: products.attributes.title,
        desc: products.attributes.description,
        img: products.attributes.img.data.attributes.url,
        price: products.attributes.price,
        quantity,
      })
    );
    toggleCart();
  }

  return (
    <MaxWithWrapper>
      {loading ? (
        "loading"
      ) : (
        <div className="product py-24 flex gap-10 ">
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="left flex flex-1 gap-4"
          >
            <div className="images flex flex-col flex-1 gap-4">
              <img
                className="w-full h-40 object-cover cursor-pointer"
                src={
                  process.env.VITE_APP_API_UPLOAD +
                  products.attributes?.img.data.attributes.url
                }
                alt="product"
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                className="w-full h-40 object-cover cursor-pointer"
                src={
                  process.env.VITE_APP_API_UPLOAD +
                  products.attributes?.img2.data.attributes.url
                }
                alt="product"
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg flex flex-[5]">
              <img
                className="w-full h-[700px] object-cover"
                src={
                  process.env.VITE_APP_API_UPLOAD +
                  products.attributes?.[selectedImg].data.attributes.url
                }
                alt="product"
              />
            </div>
          </motion.div>
          <div className="right flex flex-col flex-1 gap-5">
            <h1>{products.attributes?.title}</h1>
            <span className="text-xl text-black">200 PLN</span>
            <p>
              {products.attributes?.description || "No description available"}
            </p>
            <div className="quantity flex flex-col gap-2 ">
              <div className="text">
                <span>Quantity:</span>
              </div>
              <div className="buttons flex items-center gap-4">
                <button
                  className="p-4 bg-gray-200"
                  onClick={() => setQuantity((prev) => prev - 1)}
                >
                  -
                </button>
                {quantity}
                <button
                  className="p-4 bg-gray-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="add flex items-center justify-center gap-4 buttonBlack"
            >
              <ShoppingBag className="icon" />
              <span className="addText ">ADD TO CART</span>
            </button>
            <div className="link">
              <div className="itemHeart flex gap-2 cursor-pointer ">
                <Heart />
                <span className="text-black ">Add to wish list</span>
              </div>
            </div>
            <div className="info flex flex-col gap-2 ">
              <span className="text-black">Vendor: Polo</span>
              <span className="text-black">product Type: T-short</span>
              <span className="text-black">Tag: T-short, Women, Top</span>
            </div>
            <div
              className="details flex flex-col gap-2
          "
            >
              <span>DESCRIPTION</span>
              <hr></hr>
              <span>ADDITIONAL INFORMATION</span>
              <hr></hr>
              <span>FAQ</span>
              <hr></hr>
            </div>
          </div>
        </div>
      )}
    </MaxWithWrapper>
  );
}

export default Product;
