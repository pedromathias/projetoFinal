import React, {useState} from 'react'
import { View, Image, Text, TouchableOpacity } from "react-native"
import { styles } from './styles';
import ProfileImage from '../../assets/images/ProfileImage.jpeg'
import { FontAwesome5, Ionicons, Feather  } from '@expo/vector-icons';
import { ModalOptions } from '../../components/ModalOptions/ModalOptions';
import { ModalConfirm } from '../../components/ModalConfirm/ModalConfirm';

export const Perfil = ({navigation}) => {

    const Pedido = () => {
        navigation.navigate("Pedidos");
      }

    const [isSelectedModal, setIsSelectedModal] = useState(false);
    const [isSelectedModalConfirm, setIsSelectedModalConfirm] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>LOLJA</Text>
            <View style={styles.content}>
            <Image style={styles.imageprofile} source={ProfileImage} />
            <Text style={{fontSize:24, color:'white'}}>Lucas Martins</Text>
            <TouchableOpacity style={styles.editprofilebutton} onPress={() => setIsSelectedModal(true)}><Text style={styles.editprofiletext}>Editar Perfil</Text></TouchableOpacity>
            <View style={{width:'100%', alignItems:'center', marginTop:100}}>
            <TouchableOpacity style={styles.optionsprofile}><FontAwesome5 style={styles.iconbutton} name="shopping-basket" size={28} color="black" /><Text style={{color:'white', fontSize:20}}>Ver Pedidos</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optionsprofile}><Feather style={styles.iconbutton} name="help-circle" size={24} color="black" /><Text style={{color:'white', fontSize:20}}>Entre em contato conosco</Text></TouchableOpacity>
            <TouchableOpacity style={styles.optionsprofile} onPress={() => setIsSelectedModalConfirm(true)}><Ionicons style={styles.iconbutton} name="arrow-back-circle-outline" size={28} color="black" /><Text style={{color:'white', fontSize:20}}>Sair da Conta</Text></TouchableOpacity>
            <TouchableOpacity style={styles.deletebutton} onPress={() => setIsSelectedModalConfirm(true)}><Text style={{color:'white'}}>Deletar conta</Text></TouchableOpacity>
            </View>
            </View>
            <ModalOptions isSelectedModal={isSelectedModal} setIsSelectedModal={setIsSelectedModal} />
            <ModalConfirm isSelectedModalConfirm={isSelectedModalConfirm} setIsSelectedModalConfirm={setIsSelectedModalConfirm} text='Você tem certeza?' />
        </View>
    )
}