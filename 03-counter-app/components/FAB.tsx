import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {
    label: string

    position?: 'left' | 'right'

    //Actions
    onPress?: () => void
    onLongPress?: () => void
}

export default function FAB({label, onPress, onLongPress, position = 'right'}: Props) {
  return (
    <Pressable
            style={({ pressed }) => [
                styles.floattingButton,
                position === 'left' ? styles.positionLeft : styles.positionRight,
                pressed && { opacity: 0.7 }
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: '#fff', fontSize: 30 }}>{label}</Text>
          </Pressable>
  )
};


const styles = StyleSheet.create({
      floattingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558f',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4
    },
    positionRight:{
        right: 20,
    },
    positionLeft: {
        left: 20
    }
})