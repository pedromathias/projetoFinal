import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { botao, styles } from "./styles";
import { getProdutoEspecifico, listaProdutos } from "../../services/api";
import PicaPau from "../../assets/images/Pica-Pau.jpg"
import { Botao } from "../../components/Botao";

export const Produto = () => {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [produto, setProduto] = useState<listaProdutos>();

  useEffect(() => {
    requisicaoProduto();
  }, []);

  function requisicaoProduto() {
    setCarregando(true);
    getProdutoEspecifico(3)
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
      <Text style={styles.titulo}>LOLJA</Text>
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
    </View>
  );
};
