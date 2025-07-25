import { productosApi } from "@/core/api/productsApi";
import { Product } from "../interface/Product";

export const updateCreateProduct = async (product: Partial<Product>) => {
    
    product.stock = isNaN(Number(product.stock)) ? 0 : Number(product.stock)
    product.price = isNaN(Number(product.price)) ? 0 : Number(product.price)

    if( product.id && product.id !== 'new'){
        return updateProduct(product)
    };


    return createProduct(product)

};

const prepareImages = async(images: string[]): Promise<string[]> => {

    const fileImages = images.filter( image => image.includes('file'))
    const currentImages = images.filter( image => !image.includes('file'))

    if(fileImages.length > 0) {
        const uploadPromises = fileImages.map(uploadImage);
        const uploadedImages = await Promise.all(uploadPromises);


        currentImages.push(...uploadedImages);
    };

    return currentImages.map(img => img.split('/').pop()!);
};

const uploadImage = async (image: string): Promise<string> => {

    const formData = new FormData() as any;

    formData.append('file', {
        uri: image,
        type: 'image/jpeg',
        name: image.split('/').pop(),
    });

    const { data } = await productosApi.post<{image: string}>(
        'files/product',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );

    return data.image
}

async function updateProduct(product: Partial<Product>) {
        const {id, images = [], user, ...rest} = product;
        
        try {
            const checkedImages = await prepareImages(images);
            const { data } = await productosApi.patch(`/products/${id}`, {
                ...rest,
                images: checkedImages
            })

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar el producto");
        }
};

async function createProduct(product: Partial<Product>) {
        const {id, images = [], user, ...rest} = product;

        try {
            const checkedImages = await prepareImages(images);
            const { data } = await productosApi.post(`/products`, {
                ...rest,
                images: checkedImages
            })

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar el producto");
        }
}

