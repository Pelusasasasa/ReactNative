import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
      // -30.762091, -57.994706
      style={styles.map} 
      initialRegion={{
        latitude: -30.762091,
        longitude: -57.994706,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <Marker 
        coordinate={{
          latitude: -30.762091,
          longitude: -57.994706,
        }}
        title='Aqui Estoy'
        description='Esta es mi ubicación actual'
        />

        <Marker 
        coordinate={{
          latitude: 45.434005,
          longitude: -75.677708,
        }}
        title='Un Parque'
        description='Esta es mi ubicación actual'
        />
      </MapView>
    </View>
  )
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  }
})