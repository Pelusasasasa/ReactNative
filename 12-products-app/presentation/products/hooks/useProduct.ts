import { getProduct } from "@/core/product/actions/get-product-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productId: string) => {

    const productQuery = useQuery({
        queryKey: ['products', productId],
        queryFn: () => getProduct(productId),
        staleTime: 1000 * 60 * 60,
    });

    //Mutacion
    //Mantener el id en caso de ser uno nuevo

  return {
    productQuery
  }
}
