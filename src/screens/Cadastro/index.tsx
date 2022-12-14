import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { styles } from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Botao } from "../../components/Botao";
import { TextInputMask } from "react-native-masked-text";

import axios from "axios";
import {
  InsereCliente,
  postApiBulinha,
  postClientes,
} from "../../services/apiCliente/api";
import { isBinaryExpression } from "typescript";
import { useFocusEffect } from "@react-navigation/native";
import { ModalSignIn } from "../../components/ModalSignIn/ModalConfirm";
import { Header } from "../../components/HeaderBack";

export const Cadastro = ({ navigation }) => {
  const [isSelectedModalSignIn, setIsSelectedModalSignIn] = useState(false);

  const [nome, setNome] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [email, setEmail] = useState(null);
  // const [senha, setSenha] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [rua, setRua] = useState(null);
  const [numero, setNumero] = useState(null);
  const [complemento, setComplemento] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [cep, setCep] = useState(null);

  const [loading, setLoading] = useState(null);
  // const [showDialog, setShowDialog] = useState(null);
  const [titulo, setTitulo] = useState(null);

  let cpfField = null;
  let telefoneField = null;

  function salvar() {
    let data: InsereCliente = {
      nome: nome,
      usuario: usuario,
      cpf: cpf,
      email: email,
      // senha: senha,
      dataNascimento: dataNascimento,
      endereco: {
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
      },
    };

    postClientes(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const Logar = () => {
    navigation.navigate("Login");
    setIsSelectedModalSignIn(false);
  };

  return (
    <View style={styles.container}>
      <Header props={navigation.goBack} />
      <ScrollView style={{ marginBottom: 50 }}>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={styles.titulo}>Cadastre-se</Text>

          <View style={styles.view100}>
            <Text style={styles.textinputemail}>Digite seu nome completo</Text>
            <TextInput
              selectionColor={"#0E3B43"}
              style={styles.inputemail}
              onChangeText={(value) => {
                setNome(value);
              }}
            />
          </View>

          <View style={styles.view100}>
            <Text style={styles.textinputemail}>Digite seu usuario</Text>
            <TextInput
              selectionColor={"#0E3B43"}
              style={styles.inputemail}
              onChangeText={(value) => {
                setUsuario(value);
              }}
            />
          </View>

          <View style={styles.view100}>
            <Text style={styles.textinputemail}>Digite seu cpf</Text>
            <TextInput
             // type="cpf"
              selectionColor={"#0E3B43"}
              style={styles.inputemail}
              value={cpf}
              onChangeText={value => {
                setCpf(value);
              }}
              keyboardType="number-pad"
              returnKeyType="done"
             // ref={(ref) => (cpfField = ref)}
            />
          </View>

          <View style={styles.view100}>
            <Text style={styles.textinputemail}>Digite seu email</Text>
            <TextInput
              selectionColor={"#0E3B43"}
              style={styles.inputemail}
              onChangeText={(value) => {
                setEmail(value);
              }}
              keyboardType="email-address"
            />
          </View>

          {/* <View style={styles.view100}>
                            <Text style={styles.textinputemail}>Digite sua senha</Text>
                            <TextInput secureTextEntry={true}
                             selectionColor={'#0E3B43'}
                              style={styles.inputemail}
                              onChangeText={value => {
                                setSenha(value)
                                
                            }}
                              />
                        </View> */}

          <View style={styles.view100}>
            <Text style={styles.textinputemail}>
              Digite sua data de nascimento
            </Text>
            <TextInputMask
              type="datetime"
              selectionColor={"#0E3B43"}
              style={styles.inputemail}
              onChangeText={(value) => {
                setDataNascimento(value);
              }}
              keyboardType="number-pad"
              dataDetectorTypes={"calendarEvent"}
            />
          </View>
          <View style={styles.view100}>
            <Text style={styles.textinputemail}>Digite seu endere??o</Text>
            <TextInput
              selectionColor={"#0E3B43"}
              style={styles.inputemail}
              onChangeText={(value) => {
                setRua(value);
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <View style={styles.view40}>
                <Text style={styles.textinputemail}>N??mero</Text>
                <TextInput
                  selectionColor={"#0E3B43"}
                  style={styles.inputemail}
                  onChangeText={(value) => {
                    setNumero(value);
                  }}
                  keyboardType="number-pad"
                />
              </View>

              <View style={styles.view40}>
                <Text style={styles.textinputemail}>Complemento</Text>
                <TextInput
                  selectionColor={"#0E3B43"}
                  style={styles.inputemail}
                  onChangeText={(value) => {
                    setComplemento(value);
                  }}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.view40}>
                <Text style={styles.textinputemail}>Bairro</Text>
                <TextInput
                  selectionColor={"#0E3B43"}
                  style={styles.inputemail}
                  onChangeText={(value) => {
                    setBairro(value);
                  }}
                />
              </View>

              <View style={styles.view40}>
                <Text style={styles.textinputemail}>Cidade</Text>
                <TextInput
                  selectionColor={"#0E3B43"}
                  style={styles.inputemail}
                  onChangeText={(value) => {
                    setCidade(value);
                  }}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.view40}>
                <Text style={styles.textinputemail}>Estado</Text>
                <TextInput
                  selectionColor={"#0E3B43"}
                  style={styles.inputemail}
                  onChangeText={(value) => {
                    setEstado(value);
                  }}
                />
              </View>

              <View style={styles.view40}>
                <Text style={styles.textinputemail}>Cep</Text>
                <TextInputMask
                  type="zip-code"
                  selectionColor={"#0E3B43"}
                  style={styles.inputemail}
                  onChangeText={(value) => {
                    setCep(value);
                  }}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                salvar(), setIsSelectedModalSignIn(true);
              }}
              style={styles.signinbutton}
            >
                <AntDesign
              style={styles.addusericon}
              name="adduser"
              size={24}
              color="white"
            />
              <Text style={{ color: "white", fontSize: 20, right:15 }}>Cadastrar</Text>
            
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="none"
        transparent={true}
        visible={isSelectedModalSignIn}
        onRequestClose={() => {
          setIsSelectedModalSignIn(true);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setIsSelectedModalSignIn(true)}
        >
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContentView}>
          <View style={styles.firstLineModal}>
            <Text style={styles.textshare}>Conta criada com sucesso!</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              onPress={() => Logar()}
              style={styles.confirmbutton}
            >
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
