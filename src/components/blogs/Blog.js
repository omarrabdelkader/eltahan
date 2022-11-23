import React from "react";
import "./blog.css";
const Blog = () => {
  return (
    <section className="blog">
      <div className="heading">
        <h3>News & Refined blogs</h3>
      </div>
      <div className="tree1">
        <img src="/images/tree.png" alt="tree" />
      </div>
      <div className="tree2">
        <img src="/images/tree2.png" alt="tree" />
      </div>

      <div className="blog-grid">
        <div className="container">
          <div className="blog-box">
            <img src="/images/spa1.png" alt="" />
            <div className="content">
              <h4>Beauty . Cosmetic</h4>
              <h3>The Best Body Masks</h3>
              <p>
                There Are Many Variations Of Passages Lorem Ipsum Available, But
                The Majority
              </p>
              <button>
                Read More <img src="/images/pink-arrow.svg" alt="pink-arrow" />
              </button>
            </div>
          </div>
          <div className="blog-box">
            <img src="/images/spa2.png" alt="" />
            <div className="content">
              <h4>Beauty . Cosmetic</h4>
              <h3>The Best Body Masks</h3>
              <p>
                There Are Many Variations Of Passages Lorem Ipsum Available, But
                The Majority
              </p>
              <button>
                Read More <img src="/images/pink-arrow.svg" alt="pink-arrow" />
              </button>
            </div>
          </div>
          <div className="blog-box">
            <img src="/images/spa3.png" alt="" />
            <div className="content">
              <h4>Beauty . Cosmetic</h4>
              <h3>The Best Body Masks</h3>
              <p>
                There Are Many Variations Of Passages Lorem Ipsum Available, But
                The Majority
              </p>
              <button>
                Read More <img src="/images/pink-arrow.svg" alt="pink-arrow" />
              </button>
            </div>
          </div>
          <div className="blog-box">
            <img src="/images/spa4.png" alt="" />
            <div className="content">
              <p>Beauty . Cosmetic</p>
              <h3>The Best Body Masks</h3>
              <p>
                There Are Many Variations Of Passages Lorem Ipsum Available, But
                The Majority
              </p>
              <button>
                Read More <img src="/images/pink-arrow.svg" alt="pink-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="see-btn">
        See More <img src="/images/black-arrow.svg" alt="black-arrow" />
      </button>
    </section>
  );
};

export default Blog;
