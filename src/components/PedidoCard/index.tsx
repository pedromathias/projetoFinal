import React from "react";
import { Text, TouchableOpacityProps, TouchableOpacity, Image, View } from "react-native";
import { listaPedidos } from "../../services/api";
import { styles } from "./styles";

interface PedidoCardProps extends TouchableOpacityProps {
    pedido: listaPedidos;
    setIdSelecionado: React.Dispatch<React.SetStateAction<number>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    navigation: any;
}

export const PedidoCard = ({ pedido, setIdSelecionado }: PedidoCardProps) => {

    function abreModal() {
        setIdSelecionado(pedido.id);
    }

    return (
        <TouchableOpacity onPress={abreModal} style={styles.containerPedidos}>
            <Text style={styles.textPedidoId}>
                {pedido.id}
            </Text>

            <Text style={styles.textPedidoStatus}>
                {pedido.pedidoStatus}
            </Text>
            <Text style={styles.textPedidoId}>
                {pedido.dataPedido}
            </Text>
        </TouchableOpacity>
    )
}