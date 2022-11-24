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
        marginTop: 5,
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
        flexDirection: "row",
        backgroundColor: '#4B5D6D',
        width: '80%',
        height: 50,
        borderRadius: 10,
        color: 'white',
        paddingLeft: 15,
        marginBottom: 15,
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: 'center',
        alignItems: 'center'
    },

    addusericon: {
        right: 30,
    },
    modalContentView: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#1F2D39',
        paddingHorizontal: 14,
        paddingVertical: 20,
        height: '20%',
        marginTop: 'auto',
        position:'absolute',
        left: 20,
        right: 20,
        top:300

    },

    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    firstLineModal: {

        alignItems:'center',
        marginBottom:20
    },

    textshare: {
        paddingTop: 2,
        color: 'white',
        fontSize: 16
    },
    confirmbutton:{
        width:100,
        height:50,
        backgroundColor:'#4B5D6D',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
})