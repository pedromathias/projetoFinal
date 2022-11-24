import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, ViewComponent } from 'react-native'
import { getPedidos, listaPedidos } from "../../services/api";
import { styles } from "./styles";
import { PedidoCard } from "../../components/PedidoCard";
import { Header } from "../../components/HeaderBack";

export const Pedidos = ({navigation}) => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaPedidos, setListaPedidos] = useState<listaPedidos[]>([]);

    const [idSelecionado, setIdSelecionado] = useState<number>(0)
    const [modal, setModal] = useState<boolean>(false);

    function requisicaoListaPedidos() {
        setCarregando(true);
        getPedidos().then((res) => {
            setListaPedidos(res.data)
            
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }
    
    useEffect(() => {
        requisicaoListaPedidos();
    }, []);


    return (
        <View style={styles.container}>
            <Header props={navigation.goBack} />
            <Text style={styles.title}>LOLJA</Text>
            <Text style={styles.titleCarrinho}>Pedidos</Text>
            <View style={styles.content}>
            <FlatList    
                    style={styles.FlatList}
                    showsVerticalScrollIndicator={false}            
                    data={listaPedidos}
                    keyExtractor={item => item.id.toString()}
                    numColumns={1}
                    renderItem={({ item }) => {
                        return (                            
                           <PedidoCard
                                navigation={navigator}
                                pedido={item}
                                setIdSelecionado={setIdSelecionado}
                                setModal={setModal}
                            />                            
                        )
                    }
                    }
                />
            </View>
        </View>
    )
}
