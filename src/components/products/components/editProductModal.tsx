import { Button, Form, Input, InputNumber, message, Modal } from "antd";

import { updateProduct } from "../../../APIs";
import { CreateProductDto, ProductDto } from "../../../models";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
const EditProductModal = ({
    product,
    isModalOpen,
    setIsModalOpen,
    handleEditProduct,
}: {
    product: ProductDto;
    isModalOpen: boolean;
    setIsModalOpen: Function;
    handleEditProduct: Function;
}) => {
    const createNewProduct = async (data: CreateProductDto) => {
        const res = await updateProduct(product.id, data);
        console.log("🚀 ~ createNewProduct ~ res:", res);
        if (res) {
            message.success("Product added");
            setIsModalOpen(false);
            handleEditProduct(res);
        }
    };

    const onFininsh = (value: any) => {
        console.log(value);
        createNewProduct(value);
    };
    return (
        <Modal
            title="Basic Modal"
            open={isModalOpen}
            // onCancel={() => setIsModalOpen(false)}
            footer={null}
        >
            <Form
                {...formItemLayout}
                variant="filled"
                style={{ maxWidth: 600 }}
                onFinish={onFininsh}
                initialValues={product}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image Url"
                    name="image"
                    rules={[{ required: true, message: "Please input!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Please input Price(number)",
                        },
                    ]}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please input!" }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <div className="flex gap-3 justify-center">
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
};

export default EditProductModal;
