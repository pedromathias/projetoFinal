import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        backgroundColor: '#0E3B43',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 60
    },

    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '500'
    },

    containerPreco: {
        marginBottom: 10,
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal:10,
        
    },

    preco: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'500'
    },

    content: {
        backgroundColor: '#A5A5A5',
        height: '80%',
        width: '100%',
        borderRadius: 15,
    },

    containerBotao: {
        width:'100%',
        marginTop:-15

    }


})