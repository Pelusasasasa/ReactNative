import { API_URL, productosApi } from "@/core/api/productsApi";
import { Gender, type Product } from "../interface/Product";

const emptyProduct: Product = {
    id: '',
    title: 'Nuevo Producto',
    description: '',
    price: 0,
    stock: 0,
    slug: '',
    gender: Gender.Men,
    sizes: [],
    images: [],
    tags: ''
}

export const getProduct = async(id: string): Promise<Product> => {

    if (id === 'new') return emptyProduct;

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