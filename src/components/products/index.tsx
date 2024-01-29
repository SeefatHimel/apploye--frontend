import { useEffect, useState } from "react";

import { getProducts } from "../../APIs";
import { ProductDto } from "../../models";
import AddProductModal from "./components/addProductModal";
import SingleProduct from "./components/productComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../storage/redux/store";

const ProductsPage = () => {
    const user = useSelector((state: RootState) => state.UserReducer.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState<ProductDto[]>([]);
    const getAllProducts = async () => {
        const res: any = await getProducts();
        console.log("🚀 ~ getAllProducts ~ res:", res);
        if (res) setProducts(res);
    };
    useEffect(() => {
        getAllProducts();
    }, []);

    const handleDeleteProduct = (id: number) => {
        setProducts(products.filter((product) => product.id !== id));
    };
    const handleEditProduct = (updatedProduct: ProductDto) => {
        setProducts(
            products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    const handleAddProduct = (product: ProductDto) => {
        setProducts([...products, product]);
    };

    console.log(products);
    return (
        <div className="flex flex-col gap-4 my-2">
            {" "}
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Products</div>
                {user.role === "ADMIN" && (
                    <div
                        className="p-2 bg-black text-white w-max rounded font-semibold cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add Product
                    </div>
                )}
            </div>
            <div className="flex gap-3 w-full h-full flex-wrap">
                {products?.map((product) => (
                    <SingleProduct
                        handleEditProduct={handleEditProduct}
                        key={product.id}
                        mode={user?.role ? user?.role : ""}
                        handleDeleteProduct={handleDeleteProduct}
                        product={product}
                    />
                ))}
            </div>
            <AddProductModal
                {...{ isModalOpen, setIsModalOpen, handleAddProduct }}
            />
        </div>
    );
};

export default ProductsPage;
