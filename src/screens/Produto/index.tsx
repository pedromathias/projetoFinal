import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView } from "react-native";
import { botao, styles } from "./styles";
import { getProdutoEspecifico, listaProdutos } from "../../services/api";
import PicaPau from "../../assets/images/Pica-Pau.jpg"
import { Botao } from "../../components/Botao";
import { Header } from "../../components/HeaderBack";

export const Produto = ({route, navigation}) => {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [produto, setProduto] = useState<listaProdutos>();

  useEffect(() => {
    requisicaoProduto();
  }, []);

  function requisicaoProduto() {
    setCarregando(true);
    getProdutoEspecifico(route.params?.produto.id)
      .then((res) => {
        console.log(res.data);
        setProduto(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCarregando(false);
      });
  }

  return (
    <View style={styles.container}>
      <Header props={navigation.goBack} />
      <Text style={styles.titulo}>LOLJA</Text>
      <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {carregando ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <View>
            <View style={styles.image}>
            <Image style={styles.img}   source={{uri: produto.fotoLink}}/>
            </View>
            <Text style={styles.title}>{produto.nome}</Text>
            <Text style={styles.descricao}>{produto.descricao}</Text>
            <Text style={styles.preco}>R$ {produto.valor},99</Text>
            
        </View>
          
        )}
        <View style={botao.container}>
        <Botao title="Adicionar ao carrinho" /> 
        </View>
      </View>
      </ScrollView>
    </View>
  );
};
