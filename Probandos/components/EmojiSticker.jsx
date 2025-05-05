import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function EmojiSticker({stickerSource, imageSize}) {

    return (

        <View style={{top: -350}}>
            <Image source={stickerSource} style={{width: imageSize, height: imageSize}} />
        </View>
    )

};
