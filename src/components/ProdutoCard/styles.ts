import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonProdutoItem: {
        backgroundColor: '#1f1e25',
        padding: 15,
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
        
    },
    textPrecoItem: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 22,
        width: "80%",
        
    },
    closeIcon: {
        tintColor: '#fff',
        height: 25,
        width: 25
    },
    image:{
        width: 80,
        height: 100
    }

})