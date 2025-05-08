import { useRef, useState } from 'react';
import { View,  StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import ImageViewer from '../../components/ImageViewer';
import Button from '../../components/Button';

import IconButton from '../../components/IconButton';
import CircleButton from '../../components/CircleButton';
import EmojiPicker from '../../components/EmojiPicker';
import EmojiList from '../../components/EmojiList';
import EmojiSticker from '../../components/EmojiSticker';
import domtoimage from 'dom-to-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {

  const imageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [emoji, setPickEmoji] = useState('');
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if(status === null){
    requestPermission();
  };

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true)
    }else{
      alert('You did not select any image');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
    // we will implement this later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if(Platform.OS !== 'web'){
      try {
            const localUri = await captureRef(imageRef, {
              height: 440,
              quality: 1
            });
            await MediaLibrary.saveToLibraryAsync(localUri);
            if(localUri){
              alert('Image saved to gallery!');
            }
          } catch (error) {
            console.log(error);
        }
    }else{
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.log(error);
      }
    }

    
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
          {emoji && <EmojiSticker imageSize={40} stickerSource={emoji} />}
        </View>
      </View>
      { showAppOptions ? (
        <View style={styles.footerContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='reset' onPress={onReset}/>
            <CircleButton  onPress={onAddSticker}/>
            <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View>
          <Button label="Choose a Photo" theme='primary' onPress={pickImageAsync}/>
          <Button label="Use this Photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onCloseModal={onModalClose} onSelect={setPickEmoji}/>
      </EmojiPicker>
      
    </GestureHandlerRootView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 18
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center'
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
