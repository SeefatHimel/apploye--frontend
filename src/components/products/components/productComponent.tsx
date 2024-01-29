import { Image, message } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import { deleteProduct } from "../../../APIs";
import { ProductDto } from "../../../models";
import EditProductModal from "./editProductModal";
import { useState } from "react";

const SingleProduct = ({
    product,
    handleDeleteProduct,
    handleEditProduct,
    mode,
}: {
    product: ProductDto;
    handleDeleteProduct: Function;
    handleEditProduct: Function;
    mode: "ADMIN" | any;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const deleteSingleProduct = async () => {
        const res = await deleteProduct(product.id);
        console.log("🚀 ~ deleteProduct ~ res:", res);
        if (res) {
            message.success("Product Deleted");
            handleDeleteProduct(product.id);
        }
    };

    return (
        <div className="group relative border-2 border-gray-500 p-2 w-[170px] flex flex-col justify-center items-center rounded-lg">
            <div className="min-h-[150px] h-[150px]">
                <Image alt="..." width={150} src={product?.image} />
            </div>
            <div className="text-xl font-semibold">{product?.name}</div>
            <div className="text-sm">{product?.description}</div>
            <div className="font-semibold">Price : {product?.price}</div>
            <div>{product?.rating}</div>
            {mode === "ADMIN" && (
                <div className="flex gap-1 invisible group-hover:visible absolute top-2 right-2 cursor-pointer">
                    <div onClick={() => setIsModalOpen(true)}>
                        <AiFillEdit size={20} />
                    </div>
                    <div onClick={deleteSingleProduct}>
                        <MdDeleteForever size={20} />
                    </div>
                </div>
            )}
            <EditProductModal
                {...{ product, isModalOpen, setIsModalOpen, handleEditProduct }}
            />
        </div>
    );
};

export default SingleProduct;
