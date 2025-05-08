import { StyleSheet } from "react-native";

export const createNoteStyles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 8,
        textAlign: 'center',
        marginTop: 9,
        fontStyle: 'italic'
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginTop: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 15,
        marginVertical: 10,
        color: '#000'
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FB4E4E',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    text: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '300',
        marginTop: 15
    }
})