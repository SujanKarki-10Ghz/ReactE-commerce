import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex
            optio aspernatur, aliquam a quod qui ullam laborum enim hic illo
            saepe velit mollitia quae maiores, reprehenderit quam magnam
            provident!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            debitis omnis ullam quo alias possimus, consectetur ut eos, magni
            iure architecto voluptas modi eveniet sequi repellat, pariatur velit
            minima harum.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Hamrostore</span>
          <span className="copyright">
            &#169; Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
