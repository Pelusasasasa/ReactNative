import { useCameraStore } from '@/presentation/store/useCameraStore';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function CameraScreen() {

  const {addSelectedImage} = useCameraStore();
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [selectedCamera, setSelectedCamera] = useState<string>();

  const camaraRef = useRef<CameraView>(null);

  const onRequestPermissions = async () => {
    try {
      const { status: cameraPermissionStatus } = await requestPermission();
      if( cameraPermissionStatus !== 'granted'){
        Alert.alert('Lo siento', 'Necesitamos permiso a la camara para tomar fotos');
        return; 
      }

      const { status: galeryPermissionStatus } = await requestMediaPermission();
      if( galeryPermissionStatus !== 'granted'){
        Alert.alert('Lo siento', 'Necesitamos permiso a la galerya para mostrar las fotos');
        return; 
      }

    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Algo Salio mal con los permisos')
    }
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={{
        ...styles.container,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
      }}>
        <Text style={styles.message}>Necesitamos permiso para usar la camara y la galeria</Text>
        <TouchableOpacity onPress={onRequestPermissions}>
          <ThemedText type='subtitle'>Solicitar Permiso</ThemedText>
        </TouchableOpacity>

      </View>
    );
  };

  const onShutterButtonPress = async () => {
    if ( !camaraRef.current )return;

    const picture = await camaraRef.current.takePictureAsync({
      quality: 0.7
    });

    if( !picture?.uri ) return;

    setSelectedCamera(picture.uri);
  };

  const returnCancel = () => {
    router.dismiss();
  };

  const onPictureAccepted = async() => {
    //TODO: Implementar Funcio
    if(!selectedCamera) return;

    await MediaLibrary.createAssetAsync(selectedCamera);

    addSelectedImage(selectedCamera);

    router.dismiss();
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const onPickImages = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      selectionLimit: 5,
      aspect: [4, 3],
      quality: 0.5,
    });

    if(result.canceled) return; 

    result.assets.map(image => {
      addSelectedImage(image.uri); 
    });

    router.dismiss()
  }

  const retakeCancel = () => {
    setSelectedCamera(undefined);
  }

  if(selectedCamera){
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedCamera }} style={styles.camera}/>
        <ReturnCancelButton onPress={returnCancel}/>
        <ConfirmImageButton onPress={onPictureAccepted}/>
        <RetakeOmageButton onPress={retakeCancel}/>
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <CameraView ref={ camaraRef } style={styles.camera} facing={facing}>
          <ShutterButton onPress={onShutterButtonPress}/>
          <FlipCameraButton onPress={toggleCameraFacing}/>
          <GalleryCameraButton onPress={onPickImages}/>
          <ReturnCancelButton onPress={returnCancel}/>
          {/* <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity> */}

      </CameraView>
    </View>
  );
}

const ShutterButton = ({onPress = () => {}}) => {

  const dimensons = useWindowDimensions();
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.shutterButton,
        {
          position: 'absolute',
          bottom: 30,
          left: dimensons.width  / 2 - 32,
          borderColor: primaryColor
        }
      ]}
    />
  )
};

const FlipCameraButton = ({ onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.flipCameraButton}>
      <Ionicons name='camera-reverse-outline' size={30} color='white'/>
    </TouchableOpacity>
  )
};

const GalleryCameraButton = ({ onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.galleryButton}>
      <Ionicons name='images-outline' size={30} color='white'/>
    </TouchableOpacity>
  )
};

const ReturnCancelButton = ({ onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.returnCancelButton}>
      <Ionicons name='arrow-back-outline' size={30} color='white'/>
    </TouchableOpacity>
  )
};

const ConfirmImageButton = ({onPress = () => {}}) => {

  const dimensons = useWindowDimensions();
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.shutterButton,
        {
          position: 'absolute',
          bottom: 50,
          left: dimensons.width  / 2 - 32,
          borderColor: primaryColor
        }
      ]}
    >
      <Ionicons name='checkmark-outline' size={30} color={primaryColor}/>
    </TouchableOpacity>
  )
};

const RetakeOmageButton = ({ onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.flipCameraButton}>
      <Ionicons name='close-outline' size={30} color='white'/>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  shutterButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flipCameraButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    backgroundColor: '#17202A',
    position: 'absolute',
    bottom: 50,
    right: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    backgroundColor: '#17202A',
    position: 'absolute',
    bottom: 50,
    left: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  returnCancelButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    backgroundColor: '#17202A',
    position: 'absolute',
    top: 40,
    left: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});