import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';


import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [ state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        
          <ThemedSwitch 
            value={state.isActive}
            onValueChange={(value) => setState({...state, isActive: value})}
            className='mb-2'
            text='Activo'
          />
          <ThemedSwitch 
            value={state.isHungry}
            onValueChange={(value) => setState({...state, isHungry: value})}
            className='mb-2'
            text='Hambriento'
          />
          <ThemedSwitch 
            value={state.isHappy}
            onValueChange={(value) => setState({...state, isHappy: value})}
            className='mb-2'
            text='Contento'
          />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
