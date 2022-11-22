import react, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';

export const Cadastro = () => {

    return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom:50}}>
            <Ionicons style={styles.arrowback} name="arrow-back" size={35} color="white" />
            <View style={{alignItems:'center', width:'100%'}}>
                <Text style={styles.titulo}>Cadastre-se</Text>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite seu nome completo</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite seu usuario</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite seu cpf</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite seu email</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite sua senha</Text>
                    <TextInput secureTextEntry={true} selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite sua data de nascimento</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Digite seu endereço</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                    <View style={{flexDirection:'row'}}>
                    <View style={styles.view40}>
                    <Text style={styles.textinputemail}>Número</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view40}>
                    <Text style={styles.textinputemail}>Complemento</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                    </View>
                </View>
                <TouchableOpacity style={styles.signinbutton}><Text style={{color:'white', fontSize:20}}>Cadastrar</Text></TouchableOpacity>
                <AntDesign style={styles.addusericon} name="adduser" size={24} color="black" />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}