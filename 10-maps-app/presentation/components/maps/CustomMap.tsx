import { LatLng } from '@/infrastucture/interface/lat-lng';
import { useLocationStore } from '@/presentation/store/useLocationstore';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import FAB from '../shared/FAB';

interface Props extends ViewProps {
    showUserLocation?: boolean;
    initialLocation: LatLng;
};

const CustomMap = ({initialLocation, showUserLocation = false, ...rest}: Props) => {
    
    const mapRef = useRef<MapView>(null);
    const [isShowPolyline, setIsShowPolyline] = useState(false);
    const [isFollowinUser, setIsFollowinUser] = useState(true)
    const { clearWatchLocation, userLocationList ,watchLocation, lastKnownLocation, getLocation } = useLocationStore()

    useEffect(() => {
        watchLocation();
    
      return () => {
        clearWatchLocation();
      }
    }, []);

    
    useEffect(() => {
        if(lastKnownLocation && isFollowinUser) {
            moveCameraToLocation(lastKnownLocation);
        };
        
    }, [lastKnownLocation, isFollowinUser])
    
    const moveCameraToLocation = (latLng: LatLng) => {
        if (!mapRef.current) return;

        mapRef.current.animateCamera({
            center: latLng
        })
    };

    const moveToCurrentLocation = async() => {
        if (!lastKnownLocation) {
            moveCameraToLocation(initialLocation);
        }else{
            moveCameraToLocation(lastKnownLocation);
        };

        const location = await getLocation();
        if (!location) return;
        moveCameraToLocation(location);
    };



  return (
    
    <View {...rest}>
      <MapView
      ref={mapRef}
      onTouchStart={() => setIsFollowinUser(false)}
      style={styles.map} 
      showsUserLocation={showUserLocation}
      initialRegion={{
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>

        {
            isShowPolyline && (
            <Polyline
                coordinates={userLocationList}
                strokeColor="blue"
                strokeWidth={5}
            />
        )
        }
    </MapView> 

      <FAB
        iconName='compass-outline'
        onPress={moveToCurrentLocation}
        style={{bottom: 20, right: 20}}
      />

      <FAB
        iconName={isFollowinUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowinUser(!isFollowinUser)}
        style={{bottom: 80, right: 20}}
      />

      <FAB
        iconName={isShowPolyline ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setIsShowPolyline(!isShowPolyline)}
        style={{bottom: 140, right: 20}}
      />

    </View>
  )
};

export default CustomMap;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
});