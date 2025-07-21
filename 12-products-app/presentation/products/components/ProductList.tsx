import { Product } from '@/core/product/interface/Product';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { ProductCard } from './ProductCard';

interface Props {
    productos: Product[];
    loadNextPage: () => void;
}

const ProductList = ({productos, loadNextPage}: Props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const queryCliente = useQueryClient();

    const onPullToRefresh = async() => {
        setIsRefreshing(true);

        queryCliente.invalidateQueries({
            queryKey: ['products', 'infinite']
        });
        
        setIsRefreshing(false);
    }

  return (
    <FlatList
        data={productos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ProductCard product={item}/>}

        onEndReached={loadNextPage}
        onEndReachedThreshold={0.8}

        showsVerticalScrollIndicator={false}

        refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh}/>
        }
    />
  )
}

export default ProductList