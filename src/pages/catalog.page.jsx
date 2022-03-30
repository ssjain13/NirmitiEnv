import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/category";
import "../styles/catalog.styles.css";
export const Catalog = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          {
          categories.map((c) => (
            <Link to={c.name} key={`link-${c.id}`}>
            <div className="card-content" key={`content-${c.id}`}>
              <img src={process.env.PUBLIC_URL + `${c.image}`} key={`image-${c.id}`} />
              <div className="card-title" key={`title-${c.id}`} >
                <h3 key={`header-${c.id}`} >{c.name}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
