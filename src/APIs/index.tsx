import axios from "axios";
import { CreateProductDto, LoginDto } from "../models";

export const getProducts = async () => {
    try {
        const res = await axios.get("/products");
        console.log("🚀 ~ getProducts ~ res:", res);
        return res.data;
    } catch (error) {
        console.log("🚀 ~ getProducts ~ error:", error);
        return false;
    }
};

export const createProduct = async (data: CreateProductDto) => {
    try {
        const res = await axios.post("/products/create", data);
        console.log("🚀 ~ getProducts ~ res:", res);
        return res.data;
    } catch (error) {
        console.log("🚀 ~ getProducts ~ error:", error);
        return false;
    }
};

export const deleteProduct = async (id: number) => {
    try {
        const res = await axios.delete(`/products/delete/${id}`);
        console.log("🚀 ~ deleteProduct ~ res:", res);
        return res.data;
    } catch (error) {
        console.log("🚀 ~ deleteProduct ~ error:", error);
        return false;
    }
};

export const updateProduct = async (id: number, data: CreateProductDto) => {
    try {
        const res = await axios.patch(`/products/update/${id}`, data);
        console.log("🚀 ~ deleteProduct ~ res:", res);
        return res.data;
    } catch (error) {
        console.log("🚀 ~ deleteProduct ~ error:", error);
        return false;
    }
};

export const loginRest = async (data: LoginDto) => {
    try {
        const res = await axios.post("/auth/login", data);
        console.log("🚀 ~ loginRest ~ res:", res);
        return res.data;
    } catch (error) {
        console.log("🚀 ~ loginRest ~ error:", error);
        return false;
    }
};
