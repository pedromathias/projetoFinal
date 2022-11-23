import React, {  useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native"
import { styles } from './styles';
import { getProdutoEspecifico, listaProdutos } from "../../services/api";


export const Produto = () => {


    const [carregando, setCarregando] = useState<boolean>(false);
    const [produto, setProduto] = useState<listaProdutos>();

    useEffect(() => {
        requisicaoProduto();
    }, []);

    function requisicaoProduto() {
        setCarregando(true);
        getProdutoEspecifico(2).then((res) => {
        console.log(res.data);
        setProduto(res.data);
        }).catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setCarregando(false);
        });
    }

    return (
    <View style={styles.container}>
        <Text style={styles.titulo}>LOLJA</Text>
        <View style={styles.content}>
            {carregando ? <ActivityIndicator/> : <Text> produto.nome </Text>}
        </View>
    </View>
)
}