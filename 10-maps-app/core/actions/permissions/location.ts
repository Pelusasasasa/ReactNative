import { PermissionStatus } from "@/infrastucture/interface/location";
import * as Location from 'expo-location';
import { Alert, Linking } from "react-native";

export const requestLocationPermission = async(): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
        if(status === 'denied'){
            manualPermisionRequest();
        }
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
    Alert.alert('Permiso de Ubicacion Necesaro', 'Para continuar debe de habiliatar el permiso de Location en los ajustes de la app',
        [
            {
                text: 'Abrir Ajuste',
                onPress: () => {
                    Linking.openSettings()
                },
            },
            {
                text: 'Cancel',
                style: 'destructive'
            }
        ]
    )
};