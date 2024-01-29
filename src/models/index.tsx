export type ProductDto = {
    id: number;
    name: string;
    image: string;
    description: string;
    rating?: number;
    price: number;
};

export type CreateProductDto = {
    name: string;
    image: string;
    description: string;
    price: number;
};

export type LoginDto = {
    username: string;
    password: string;
};
