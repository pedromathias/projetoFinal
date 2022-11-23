import react, {useState} from "react";
import {TextInput, View, Text, TouchableOpacity} from 'react-native'
import { styles } from "./styles";
import { Entypo} from '@expo/vector-icons';

export const Login = () => {

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true)

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>LOLJA</Text>
            <TextInput style={styles.userinput} selectionColor={'#0E3B43'} placeholder="Insira seu e-mail" placeholderTextColor={'white'} ></TextInput>
            <TextInput style={styles.passwordinput} secureTextEntry={hidePass} placeholder="Insira sua senha" selectionColor={'#0E3B43'} placeholderTextColor={'white'} />
                <TouchableOpacity style={styles.eyevisible} onPress={() => setHidePass(!hidePass)} >
                    {hidePass ?
                        <Entypo name="eye" size={24} color="white" />
                        :
                        <Entypo name="eye-with-line" size={24} color="white" />
                    }

                </TouchableOpacity>
            <TouchableOpacity style={styles.loginbutton}><Text style={styles.loginbuttontext}>Entrar</Text></TouchableOpacity>
            <View style={styles.line} />
            <View style={styles.bottomview}>
            <Text style={styles.bottomtext}>Você já é um cliente ?  </Text><TouchableOpacity><Text style={styles.bottomtext2}>Cadastre-se</Text></TouchableOpacity>
            </View>
          </View>
    )
}