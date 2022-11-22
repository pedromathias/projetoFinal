import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StatusBar } from 'react-native'
import { getProdutos, listaProdutos } from "../../services/api";
// import { ModalStatus } from "../../components/Modais/ModalStatus";
import { styles } from "./styles";

export const Home = () => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaProdutos, setListaProdutos] = useState<listaProdutos[]>([]);

    const [idSelecionado, setIdSelecionado] = useState<string>("")
    const [modal, setModal] = useState<boolean>(false);

    function requisicaoListaProdutos() {
        setCarregando(true);
        getProdutos().then((res) => {
            setListaProdutos(res.data.results)
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
            
             {carregando ?
                <ActivityIndicator
                    size={"large"}
                />
                :
                <FlatList
                    data={listaProdutos}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => {
                        return (
                            <ProdutoCard
                                equipamento={item}
                                setIndexSelecionado={setIdSelecionado}
                                setModal={setModal}
                            />
                        )
                    }
                    }
                />
            }
            {modal &&
                <ModalStatus
                    index={idSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            }
            
        </View>
    )



}