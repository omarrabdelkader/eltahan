import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        {/* IMAGES */}
        <div className="images">
          <div>
            <img src="/images/cos1.png" alt="cosmatics" />
          </div>
          <div className="image2">
            <img src="/images/cos2.png" alt="cosmatics" />
          </div>
        </div>

        {/* TEXT */}
        <div className="text">
          <div className="content">
            <h3>About Us</h3>
            <h2>Health Care & Beauty Are Our Concern</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
