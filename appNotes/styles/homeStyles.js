import { StyleSheet } from "react-native";

export const homeNoteStyles = StyleSheet.create({
    main: {
        flex: 1,
    },
    title: {
        marginTop: 60,
        textAlign: 'center',
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 600
    },
    buttonAdd: {
        backgroundColor: '#FB4E4E',
        marginHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 5,
        marginTop: 30
    },
    textButtonAdd: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    }
});