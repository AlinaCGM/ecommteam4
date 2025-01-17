import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyWishList from "./pages/MyWishList";
import Products from "./pages/Products";

import ProductList from "./components/products/ProductList";
import Footer from "./components/footer/Footer";
// import ProductDetail from "./components/productDetail/ProductDetail";

import { createTheme, ThemeProvider } from "@mui/material";

import { useState } from "react";
import ProductDetailItem from "./components/productDetail/ProductDetailItem";

const light = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#FFFFFF",
    },

    primary: {
      main: "#5f869b",
    },

    text: {
      primary: "#3e3f40",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#222222",
    },
    text: {
      primary: "#e1e4e7",
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 16,
  },
});
// localStorage.clear();
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Box className="App">
        <NavBar changeTheme={changeTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shoppingCart" element={<Cart />}></Route>
          <Route path="/myWishList" element={<MyWishList />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetailItem />}
          ></Route>
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
