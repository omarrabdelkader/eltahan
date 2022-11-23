import React from "react";
import "./product.css";

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="heading">
          <h3>Our Beautiful Products</h3>
          <h3>Just One Click Away</h3>
        </div>

        <div className="product-grid">
          <div className="product-box">
            <div className="image">
              <img src="images/product.png" alt="cart" />
              <div className="sale-new">
                <p>Sale</p>
              </div>
              <div className="heart">
                <img src="images/heart.svg" alt="heart" />
              </div>
            </div>

            <p className="product-paragraph">
              Everyday Essentials Multi Use Brush Set
            </p>
            <div className="price-cart">
              <p>$355</p>
              <div className="cart">
                <img src="images/cart-icon.svg" alt="cart" />
              </div>
            </div>
          </div>
          <div className="product-box">
            <div className="image">
              <img src="images/product.png" alt="" />
              <div className="sale-new">
                <p className="new">New</p>
              </div>
              <div className="heart">
                <img src="images/heart.svg" alt="heart" />
              </div>
            </div>
            <p className="product-paragraph">
              Everyday Essentials Multi Use Brush Set
            </p>
            <div className="price-cart">
              <p>$355</p>
              <div className="cart">
                <img src="images/cart-icon.svg" alt="cart" />
              </div>
            </div>
          </div>
          <div className="product-box">
            <div className="image">
              <img src="images/product.png" alt="" />
              <div className="heart">
                <img src="images/heart.svg" alt="heart" />
              </div>
            </div>
            <p className="product-paragraph">
              Everyday Essentials Multi Use Brush Set
            </p>
            <div className="price-cart">
              <p>$355</p>
              <div className="cart">
                <img src="images/cart-icon.svg" alt="cart" />
              </div>
            </div>
          </div>
          <div className="product-box">
            <div className="image">
              <img src="images/product.png" alt="cart" />
            </div>
            <p className="product-paragraph">
              Everyday Essentials Multi Use Brush Set
            </p>
            <div className="price-cart">
              <p>$355</p>
              <div className="cart">
                <img src="images/cart-icon.svg" alt="cart" />
              </div>
            </div>
          </div>
        </div>

        <button className="btn">
          See More <img src="/images/pink-arrow.svg" alt="pink-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Product;
