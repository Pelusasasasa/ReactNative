import { router } from 'expo-router';
import React, { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';

import { usePermissionStore } from '../store/usePermissions';

import { PermissionStatus } from '@/infrastucture/interface/location';

const PermissionCheckerProvider = ({children}: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionStore();

    useEffect(() => {
        if(locationStatus === PermissionStatus.GRANTED){
            router.replace('/map')
        }else if(locationStatus !== PermissionStatus.CHECKING){
            router.replace('/permission')
        };
    }, [locationStatus]);

    useEffect(() => {
        checkLocationPermission();
    }, []);

    useEffect(() => {
      const subscription = AppState.addEventListener('change', (nextAppState) => {
        if(nextAppState === 'active'){
            checkLocationPermission();
        };
      });
    
      return () => {
        subscription.remove();
      }
    }, [])

  return <>{children}</>
}

export default PermissionCheckerProvider