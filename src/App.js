import { Paper, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
import { ProductSlider } from "./components/landing/slider.component";

import { Catalog } from "./pages/catalog.page";
import { Login } from "./pages/login.page";
import { ProductDetails } from "./pages/product.details.page";
import { Products } from "./pages/products.page";
import { Register, Registeration } from "./pages/registration.page";
import { Shopping } from "./pages/shopping.page";
import { getProducts } from "./services/products.service";

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchApi() {
      let response = await getProducts();
      response = await response.json();
      setProducts(response);
    }
    fetchApi();
  }, []);

  const StyledPaper = styled(Paper)(({theme}) => ({
    height:"100%"
  }))
  return (
    <StyledPaper>
      

      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route index element={<ProductSlider />} />
        <Route path="/:category" element={<Shopping/>}/>
        
      </Routes>
      <Footer/>
    </StyledPaper>
  );
}

export default App;
