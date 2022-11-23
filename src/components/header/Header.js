import React, { useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <header>
      <div className="container">
        <div className="image">
          <img src="/images/logo.png" alt="eltahan-logo" />
        </div>

        {/* TOGGLE MENU */}
        <div className="toggle-menu-container">
          <FaBars onClick={onToggle} />
          {toggle ? (
            <div className="toggle-menu">
              <ul>
                <li>
                  <a href="lol.com">Home</a>
                </li>
                <li>
                  <a href="lol.com">About Us</a>
                </li>
                <li>
                  <a href="lol.com">Our Services</a>
                </li>
                <li>
                  <a href="lol.com">Gallery</a>
                </li>
                <li>
                  <a href="lol.com">Shop</a>
                </li>
                <li>
                  <a href="lol.com">Blogs</a>
                </li>
                <li>
                  <a href="lol.com">Testimonials</a>
                </li>
                <li>
                  <img src="/images/search-icon.svg" alt="icon" />
                </li>
                <li>
                  <img src="/images/cart-icon.svg" alt="icon" />
                </li>
                <li>
                  <img src="/images/heart-icon.svg" alt="icon" />
                </li>
                <li>
                  <img src="/images/user-icon.svg" alt="icon" />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="lol.com">Home</a>
            </li>
            <li>
              <a href="lol.com">About Us</a>
            </li>
            <li>
              <a href="lol.com">Our Services</a>
            </li>
            <li>
              <a href="lol.com">Gallery</a>
            </li>
            <li>
              <a href="lol.com">Shop</a>
            </li>
            <li>
              <a href="lol.com">Blogs</a>
            </li>
            <li>
              <a href="lol.com">Testimonials</a>
            </li>
          </ul>
        </nav>

        <ul className="icons">
          <li>
            <img src="/images/search-icon.svg" alt="icon" />
          </li>
          <li>
            <img src="/images/cart-icon.svg" alt="icon" />
          </li>
          <li>
            <img src="/images/heart-icon.svg" alt="icon" />
          </li>
          <li>
            <img src="/images/user-icon.svg" alt="icon" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
