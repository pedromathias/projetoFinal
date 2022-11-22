import React from "react";
import { View, Text,FlatList, ActivityIndicator} from 'react-native'
import { useState, useEffect } from 'react';
import { styles } from "./styles";

export const Home = () => {
 
    return (

      <View
            style={styles.container}
        >
            <Text style={styles.title}>
                Loja De Equipamentos
            </Text>
            {carregando ?
                <ActivityIndicator
                    size={"large"}
                />
                :
                <FlatList
                    data={listaEquipamentos}
                    keyExtractor={item => item.index}
                    renderItem={({ item }) => {
                        return (
                            <EquipamentoCard
                                equipamento={item}
                                setIndexSelecionado={setIndexSelecionado}
                                setModal={setModal}
                            />
                        )
                    }
                    }
                />
        </View>
    )



}