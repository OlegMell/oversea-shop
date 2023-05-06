
export interface ProductDTO {
    title: string;
    description: string;
    images: string[];
    prices: { price: string, oldPrice: string };
    category: string;
}


export interface ProductIdDTO {
    id: string;
}