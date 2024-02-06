import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/products";
import Layout from "./components/layout";
import Axios from "axios";
import LoginPage from "./components/auth/login";
import { Provider } from "react-redux";
import { store } from "./storage/redux/store";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
// Axios.defaults.baseURL = "https://apploeebackend.onrender.com";
Axios.defaults.baseURL = "http://127.0.0.1:8000/";
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<App />} />zpost
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
