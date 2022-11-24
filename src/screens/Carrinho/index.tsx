import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, ViewComponent } from 'react-native'
import { styles } from "./styles";
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";
import { ProdutoCard } from "../../components/ProdutoCard";
import { Botao } from "../../components/Botao";
import { Octicons } from '@expo/vector-icons';


export const Carrinho = () => {

    // const [carregando, setCarregando] = useState<boolean>(false);
    const listaDeProdutos = useContext(CarrinhoContexto).listaDeProdutos
    const precoTotal = useContext(CarrinhoContexto).precoTotal

    const [idSelecionado, setIdSelecionado] = useState<number>(0);
    const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);


    return (

        <View style={styles.container}>
            <Text style={styles.title}>LOLJA</Text>
            <View style={styles.content}>
                {/* <FlatList
                    data={listaDeProdutos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ProdutoCard
                                produto={item}
                                setIdSelecionado={setIdSelecionado}
                                setModal={setModal}
                                setPrecoSelecionado={setPrecoSelecionado}
                            />
                        )
                    }
                    }
                /> */}
                <View style={styles.containerPreco}>
                    <Text style={styles.preco}>
                        Preço:
                    </Text>
                    <Text style={styles.preco}>
                        R$ {precoTotal},00
                    </Text>
                </View>

                {/* {modal &&
                <ModalStatus
                    index={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                    preco={precoSelecionado}
                />
            } */}
            </View>
            <View style={styles.containerBotao}>
            <Botao title="Fazer Pedido"/>
                <View style={styles.iconFazerPedido} >
                    <Octicons name="check-circle-fill" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}