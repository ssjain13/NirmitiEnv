import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Catalog } from "../components/catalog.component";
import { productsDummy } from "../data/product.data";
import '../styles/shopping.styles.css'
export const Shopping = () => {
  const { category } = useParams();
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    const filteredData = productsDummy.filter(
      (product) => product.category === category
    );
    setCatalog(filteredData);
  }, [category]);

  return (
    <div className="product-container">
      {catalog.map((c) => (
      <Catalog c={c}/>
      ))}
    </div>
  );
};
