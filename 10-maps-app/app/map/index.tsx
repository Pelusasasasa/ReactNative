import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import CustomMap from '@/presentation/components/maps/CustomMap';
import { useLocationStore } from '@/presentation/store/useLocationstore';

const MapScreen = () => {

  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if(!lastKnownLocation) {
      getLocation();
    }
  }, []);

  if (!lastKnownLocation) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <View>
      <CustomMap
        initialLocation={lastKnownLocation}
        
      />
    </View>
  )
}

export default MapScreen;

