import { API_URL, productosApi } from "@/core/api/productsApi";
import { Product } from "../interface/Product";

export const getProducts = async(limit = 20, offset = 0) => {


    try {
        const { data } = await productosApi.get<Product[]>(`/products`, {
            params: {
                limit,
                offset
            }
        });

        return data.map( (product) => ({
            ...product,
            images: product.images.map((image) => `${API_URL}/files/product/${image}`)
        }));
    } catch (error) {
        console.log(error)
        throw new Error('Unabled to load prodcuts')
    }
}