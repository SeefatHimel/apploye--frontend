import axios from "axios";

export const getProducts = async () => {
    try {
        const res = await axios.get("/products");
        console.log("🚀 ~ getProducts ~ res:", res);
        return res;
    } catch (error) {
        console.log("🚀 ~ getProducts ~ error:", error);
        return false;
    }
};
