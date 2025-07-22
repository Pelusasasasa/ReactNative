import { productosApi } from "@/core/api/productsApi";
import { Product } from "../interface/Product";

export const updateCreateProduct = async (product: Partial<Product>) => {
    
    product.stock = isNaN(Number(product.stock)) ? 0 : Number(product.stock)
    product.price = isNaN(Number(product.price)) ? 0 : Number(product.price)

    if( product.id && product.id !== 'new'){
        return updateProduct(product)
    };


    return createProduct(product)

}

async function updateProduct(product: Partial<Product>) {
        const {id, images = [], user, ...rest} = product;

        try {
            const { data } = await productosApi.patch(`/products/${id}`, {
                ...rest,
            })

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar el producto");
        }
}
async function createProduct(product: Partial<Product>) {
        const {id, images = [], user, ...rest} = product;

        try {
            const { data } = await productosApi.post(`/products`, {
                ...rest,
            })

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar el producto");
        }
}

