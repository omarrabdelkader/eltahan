import React from "react";
import "./landing.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Landing = () => {
  return (
    <section className="landing">
      <FaAngleLeft className="change-background left" />
      <FaAngleRight className="change-background right" />
      <div className="text-container">
        <h1>Beauty & Health Meet Truly Modern Aesthetics</h1>
      </div>
      <button className="btn">Reservation Now</button>
    </section>
  );
};

export default Landing;
