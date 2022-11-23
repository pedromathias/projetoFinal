import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonProdutoItem: {
        backgroundColor: '#1f1e25',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
        width: 160,
        height: 240,
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginRight: 30
    },
    textProdutoItem: {
        textAlign: "center",
        marginLeft: 5,
        color: '#FFF',
        fontSize: 17,
        width: "80%",
        padding: 15,
        marginTop: -15
        
    },
    textPrecoItem: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 22,
        width: "80%",
        padding: 15,
        marginTop: -15
        
    },
    closeIcon: {
        tintColor: '#fff',
        height: 25,
        width: 25
    },
    image:{
        marginTop: 30,
        width: 100,
        height: 120,
        marginBottom:10
    }

})