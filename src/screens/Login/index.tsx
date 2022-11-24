import react, {useState} from "react";
import {TextInput, View, Text, TouchableOpacity} from 'react-native'
import { styles } from "./styles";
import { Entypo} from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../../Context/Auth";



export const Login = ({navigation}) => {
    
    const {signIn} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    
    const Cadastrar= () => {
        navigation.navigate("Cadastro");
    }
    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>LOLJA</Text>
            <TextInput style={styles.userinput} selectionColor={'#0E3B43'} placeholder="Insira seu e-mail" placeholderTextColor={'white'} onChangeText={setEmail} ></TextInput>
            <TextInput style={styles.passwordinput} secureTextEntry={hidePass} placeholder="Insira sua senha" selectionColor={'#0E3B43'} placeholderTextColor={'white'} onChangeText={setPassword} />
                <TouchableOpacity style={styles.eyevisible} onPress={() => setHidePass(!hidePass)} >
                    {hidePass ?
                        <Entypo name="eye" size={24} color="white" />
                        :
                        <Entypo name="eye-with-line" size={24} color="white" />
                    }

                </TouchableOpacity>
            <TouchableOpacity style={styles.loginbutton} onPress={()=> signIn(email, password)}><Text style={styles.loginbuttontext}>Entrar</Text></TouchableOpacity>
            <View style={styles.line} />
            <View style={styles.bottomview}>
            <Text style={styles.bottomtext}>Você já é um cliente ?  </Text><TouchableOpacity onPress={()=> Cadastrar()}><Text style={styles.bottomtext2}>Cadastre-se</Text></TouchableOpacity>
            </View>
          </View>
    )
}