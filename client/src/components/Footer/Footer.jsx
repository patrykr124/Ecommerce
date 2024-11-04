import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer pt-10 bg-white">
      <MaxWithWrapper className="gap-10 flex flex-col">
        <div className="top flex gap-10 ">
          <div className="item flex-1 flex flex-col gap-2">
            <h3>Categories</h3>
            <span>Woman</span>
            <span>Men</span>
            <span>Shoes</span>
          </div>
          <div className="item flex-1  flex flex-col gap-2">
            <h3>Links</h3>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stories</span>
            <span>Cookies</span>
          </div>
          <div className="item flex-1  text-justify gap-2">
            <h3>About</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              necessitatibus cum voluptatum aspernatur qui similique non neque
              repudiandae eaque minus.
            </span>
          </div>
          <div className="item flex-1  text-justify gap-2">
            <h3>Contact</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              praesentium nostrum impedit voluptate animi quos voluptatem, ab,
              omnis illo soluta rem eligendi accusamus sit asperiores molestias
              perferendis tempora officiis suscipit.
            </span>
          </div>
        </div>
        <div className="bottom flex items-center justify-between">
          <div className="left">
            <div className="logo text-3xl tracking-wide">
              <Link to="/">STORE</Link>
            </div>
            <span className="copyright">
              © 2024 Store. All rights reserved.
            </span>
          </div>
          <div className="right">
            <img className="h-16" src="/img/payment.png" alt="payment-methods" />
          </div>
        </div>
      </MaxWithWrapper>
    </div>
  );
}

export default Footer;
