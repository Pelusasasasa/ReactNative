import { getProducts } from "@/core/product/actions/get-products.action";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProducts = () => {

    const productsQuery = useInfiniteQuery({
        queryKey: ['products', 'infinite'],
        queryFn: ({ pageParam = 1 }) => getProducts(20, pageParam * 20),

        staleTime: 1000 * 60 * 5,

        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => allPages.length,
    });
    

  return {
    productsQuery,

    //Metodos
    loadNextPage: productsQuery.fetchNextPage,
    
  }
}
