import React from "react";
import { View, Modal, TouchableWithoutFeedback, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Feather, FontAwesome, AntDesign, EvilIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { styles } from "./styles";



export const ModalSignIn = ({ isSelectedModalSignIn, setIsSelectedModalSignIn}) => {

   return (

      <Modal
         animationType="none"
         transparent={true}
         visible={isSelectedModalSignIn}
         onRequestClose={() => {
            setIsSelectedModalSignIn(true);
         }}>
         <TouchableWithoutFeedback
            onPress={() => setIsSelectedModalSignIn(true)}>
            <View style={styles.modalOverlay} />
         </TouchableWithoutFeedback>
         <View style={styles.modalContentView}>
            <View style={styles.firstLineModal}>
               <Text style={styles.textshare}>Conta criada com sucesso!</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
         <TouchableOpacity style={styles.confirmbutton} ><Text>Ok</Text></TouchableOpacity>
            </View>
         </View>
      </Modal>


   )
}

