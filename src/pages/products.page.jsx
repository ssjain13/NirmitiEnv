import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Product } from "../components/product.component";
import "../styles/products.page.styles.css";

export const Products = ({ products }) => {
  return (
    <div className="grid-container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Add</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((p) => (
              <tr>
                <Link to={`${p.id}`} className="details" key={p.id}>
                  <Product product={p} key={p.id} />
                </Link>
              </tr>
            ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};
