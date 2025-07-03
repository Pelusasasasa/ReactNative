import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {
  const primaryColor = useThemeColor({}, 'primary');
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000);
  };
  
  return (
    <ThemedView>
      <FlatList 
        data={numbers} 
        renderItem={({ item }) => <ListItem number={item}/>} 
        onEndReached={ loadMore }
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View className='justify-center h-[150px]'>
            <ActivityIndicator size={50} color={primaryColor}/>
          </View>
        )}
        />

    </ThemedView>
  );
};
export default InfiniteScrollScreen;


interface ListItemProps {
  number: number
};

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage uri={`https://picsum.photos/id/${ number }/500/400`} style={{
      height: 400,
      width: '100%'
    }}/>
  //   <Image 
  //   source={{ uri: `https://picsum.photos/id/${ number }/500/400`}}
  //   style={{
  //     height: 400,
  //     width: '100%'
  //   }}
  // />
  )
};
