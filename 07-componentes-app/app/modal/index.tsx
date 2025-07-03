import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className='mx-4'>
        <Text className='text-light-text dark:text-dark-text mt-2 text-xl'>Abrir Modal</Text>
      </Link>

      <ThemedButton className='mx-4' onPress={() => router.push('/modal/modal-window')}>Abrir Modal</ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
