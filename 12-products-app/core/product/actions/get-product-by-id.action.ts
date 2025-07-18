import { API_URL, productosApi } from "@/core/api/productsApi";
import { type Product } from "../interface/Product";

export const getProduct = async(id: string): Promise<Product> => {
    try {
        const { data } = await productosApi.get<Product>(`/products/${id}`);

        return {
            ...data,
            images: data.images.map((image) => `${API_URL}/files/product/${image}`)
        }
    } catch (error) {
        console.log(error)
        throw new Error(`Product with id ${id} not found`);
    }

}