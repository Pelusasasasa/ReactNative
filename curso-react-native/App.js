import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { homeStyles } from './styles/homeStyles';

export default function App() {
  return (
    <ScrollView >
      <ImageBackground resizeMode='cover' source={{uri: 'https://th.bing.com/th/id/OIP.MS5FviWFihNjcQbymAboBAAAAA?cb=iwc1&rs=1&pid=ImgDetMain'}}>
        <View>
          <Text style={homeStyles.title}>Este es nuestro titulo</Text>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
      </ImageBackground>      

      <Pressable style={homeStyles.button} onPress={() => Alert.alert('Alerta', 'Ocurrio un Error')}>
          <Text style={homeStyles.buttonLabel}>Este es un boton personalizado</Text>
      </Pressable>
    </ScrollView>
  );
}


// <Button title='Este es un boton' color='#f194ff' onPress={() => Alert.alert('Alerta', 'Ocurrio un Error')}/>
// <Image source={{ uri: 'https://th.bing.com/th/id/OIP.MS5FviWFihNjcQbymAboBAAAAA?cb=iwc1&rs=1&pid=ImgDetMain'}}
//         style={homeStyles.logo}
//       />
//       <Image source={require('./assets/OIP.jpeg')} style={homeStyles.logo} />