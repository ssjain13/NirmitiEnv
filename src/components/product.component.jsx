import React from "react";
import "../styles/product.styles.css";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
export const Product = ({ product }) => {
  return (
    <>
      <td>
        <img className="product-image" src={product.image} />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td><AddRoundedIcon/></td>
      <td><DeleteForeverRoundedIcon/></td>
    </>
  );
};
