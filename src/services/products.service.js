

//Get all products

export const getProducts = () => {
    return fetch("https://fakestoreapi.com/products");
}

//Add new product
export const addProduct = (product) => {
 return fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
  });
};
//Remove specified product
export const removeProduct = (productId) => {};

//Update existing product
export const updateProduct = (product) => {};

export const fetchProductDetails = (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
}