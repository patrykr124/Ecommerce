import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import { useEffect, useRef, useState } from "react";
import Cart from "./components/Cart/Cart";
import { useOnClickOutside } from "./Hooks/CloseOnClick";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const navRef = useRef(null);
  useOnClickOutside(navRef, () => setIsOpen(null));

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setIsOpen(null);
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });

  return (
    <div className="app">
      <Navbar toggleCart={toggleCart} />
      <Cart ref={navRef} toggleCart={toggleCart} isOpen={isOpen} />
      <Outlet context={{ toggleCart }} />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
