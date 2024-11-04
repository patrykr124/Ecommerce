import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MaxWithWrapper from "../MaxWithWrapper";

function Navbar({ toggleCart }) {
  const [hiden, setHiden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const products = useSelector((state) => state.cart.products);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 100) {
      setHiden(true);
    } else {
      setHiden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hiden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="navbar h-16 flex border-b items-center fixed z-50 bg-white inset-0"
    >
      <MaxWithWrapper className="flex justify-between">
        <div className="left flex items-center gap-5">
          <div className="item flex items-center">
            <img src="/img/en.png" alt="language-flag" />
            <ChevronDown />
          </div>
          <div className="item flex items-center">
            <span className="text-black">USD</span>
            <ChevronDown />
          </div>
          <div className="item">
            <Link to="products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="products/4">Elegant</Link>
          </div>
        </div>
        <div className="center text-3xl tracking-wide">
          <Link to="/">STORE</Link>
        </div>
        <div className="right flex items-center gap-4">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Stores</Link>
          <div className="icons flex gap-4">
            <Search className="cursor-pointer" />
            <UserRound className="cursor-pointer" />
            <Heart className="cursor-pointer" />
            <div
              className="cartIcon flex hover:animate-[sway_1s_ease-in-out_infinite]"
              onClick={toggleCart}
            >
              <ShoppingBag className="cursor-pointer" />
              <span className="cursor-pointer text-sm w-5 h-5 rounded-xl p-1 text-white bg-black flex justify-center items-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </MaxWithWrapper>
    </motion.div>
  );
}

export default Navbar;
