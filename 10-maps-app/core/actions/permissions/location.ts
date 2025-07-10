import { PermissionStatus } from "@/infrastucture/interface/location";
import * as Location from 'expo-location';

export const requestLocationPermission = async(): Promise<PermissionStatus> => {
    const { status } = await Location.requestBackgroundPermissionsAsync();

    if(status !== 'granted') {
        manualPermisionRequest();
        return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
};

export const  checkLocationPermission = async() => {
    const { status } = await Location.getForegroundPermissionsAsync();

    switch (status){
        case 'granted':
            return PermissionStatus.GRANTED;
        case 'denied':
            return PermissionStatus.DENIED;
        default: 
            return PermissionStatus.UNDETERMINED;
    }

};


const manualPermisionRequest = async() => {

};