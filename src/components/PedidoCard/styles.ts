import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPedidos: {
        backgroundColor: '#1f1e25',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: 10,
        width: 250,
        height: 110,
        flexDirection: "column",
    },
    textPedidoId: {
        textAlign: "center",
        marginLeft: 5,
        color: '#FFF',
        fontSize: 17,
        width: "80%",
        padding: 10,
        marginTop: -5
    },
    textPedidoStatus: {
        textAlign: "center",
        marginLeft: 5,
        color: '#FFF',
        fontSize: 13,
        width: "80%",
        padding: 15,
        marginTop: -20
    }
})