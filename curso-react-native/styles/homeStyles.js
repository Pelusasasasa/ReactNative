import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 32,
            fontWeight: 700,
            color: 'blue'
        },
        logo: {
            width: 300,
            height: 300
        },
        button: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 25,
            marginTop: 20
        },
        buttonLabel:{ 
            color: '#fff',
            fontSize: 18,
            fontStyle: 'italic'
        }
});