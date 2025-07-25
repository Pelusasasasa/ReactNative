import { updateCreateProduct } from "@/core/product/actions/create-update-product.action";
import { getProduct } from "@/core/product/actions/get-product-by-id.action";
import { Product } from "@/core/product/interface/Product";
import { useCameraStore } from "@/presentation/store/useCameraStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Alert } from "react-native";

export const useProduct = (productId: string) => {

  const { clearImages } = useCameraStore()

  const queryClient = useQueryClient();
  const productIdRef = useRef(productId);

    const productQuery = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProduct(productId),
        staleTime: 1000 * 60 * 60,
    });

    //Mutacion

    const productMutation = useMutation({
      mutationFn: (data: Product) =>updateCreateProduct({
        ...data,
        id: productIdRef.current
      }),
      onSuccess(data: Product){
        productIdRef.current = data.id;
        clearImages();
        queryClient.invalidateQueries({
          queryKey: ['products', 'infinite']
        });

        queryClient.invalidateQueries({
          queryKey: ['products', data.id]
        });

        Alert.alert('Producto Guardado', 'El producto se guardo correctamente')
      }
    })


    //Mantener el id en caso de ser uno nuevo

  return {
    productQuery,
    productMutation
  }
}
