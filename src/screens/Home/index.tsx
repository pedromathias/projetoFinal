import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StatusBar } from 'react-native'
import { getProdutos, listaProdutos } from "../../services/api";
// import { ModalStatus } from "../../components/Modais/ModalStatus";
import { styles } from "./styles";
import { ProdutoCard } from "../../components/ProdutoCard";

export const Home = ({navigation}) => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);

    const [idSelecionado, setIdSelecionado] = useState<number>(0)
    const [modal, setModal] = useState<boolean>(false);

    function requisicaoListaProdutos() {
        setCarregando(true);
        getProdutos().then((res) => {
            setListaProdutos(res.data)
            
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }
    
    useEffect(() => {
        requisicaoListaProdutos();
    }, []);

    return (

        <View style={styles.container} >
            <Text style={styles.title}>
                LOLJA
            </Text>
            
            <View style={styles.produtos}>
             {carregando ?
                <ActivityIndicator
                    size={"large"}
                />
                :
                <FlatList                
                    data={listaProdutos}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (                            
                           <ProdutoCard
                           navigation={navigation}
                                produto={item}
                                setIdSelecionado={setIdSelecionado}
                                setModal={setModal}
                            />                            
                        )
                    }
                    }
                />
            }
            </View>
        </View>
    )



}