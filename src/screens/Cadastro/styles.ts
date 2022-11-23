import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        backgroundColor: '#0E3B43',
        width: '100%',
        height: '100%',
        alignItems: 'center'

    },

    arrowback: {

        position: 'absolute',
        top: 50,
        left: 10

    },

    titulo: {
        fontSize: 40,
        marginTop: 130,
        marginBottom: 30,
        color: 'white'
    },

    inputemail: {
        backgroundColor: '#868686',
        width: '100%',
        height: 50,
        borderRadius: 10,
        color: 'white',
        paddingLeft: 15,
        marginBottom: 15
    },

    textinputemail: {
        color: "#fff",
        marginBottom: 5,
        fontSize: 16
    },

    view100: {
        width: '90%',

    },

    view40: {
        width: '45%',
        marginRight: 25
    },

    signinbutton: {
        backgroundColor: '#4B5D6D',
        width: '80%',
        height: 50,
        borderRadius: 10,
        color: 'white',
        paddingLeft: 15,
        marginBottom: 15,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    addusericon: {
        position: 'absolute',
        bottom: 27,
        left: 20
    }
})