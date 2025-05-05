import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IconButton({icon, label, onPress}){
    return (
        <Pressable onPress={onPress} style={styles.IconButton}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.IconButtonLabel}>{label}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({

    IconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }

});