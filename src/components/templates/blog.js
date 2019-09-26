import React from "react";
import Navbar from "../navbar/navbar";

const parseData = text => {
  return text.map(item => {
    return <p key={item.sentence}>{item.sentence}</p>;
  });
};
const Blog = ({ header, text, hero }) => {
  return (
    <div>
      <Navbar />
      <div className="blog">
        <header className="grid">
          <h2>{header}</h2>
        </header>
        <div className="grid">
          <div className="blog__hero">
            <img src={hero} alt="hero"/>
          </div>
          {parseData(text)}
        </div>
      </div>
    </div>
  );
};

export default Blog;
