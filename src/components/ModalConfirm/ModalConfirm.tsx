import React from "react";
import { View, Modal, TouchableWithoutFeedback, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Feather, FontAwesome, AntDesign, EvilIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { styles } from "./styles";
import { useAuth } from "../../Context/Auth";


export const ModalConfirm = ({ isSelectedModalConfirm, setIsSelectedModalConfirm, text, }) => {
   const {signOut} = useAuth();

   return (

      <Modal
         animationType="slide"
         transparent={true}
         visible={isSelectedModalConfirm}
         onRequestClose={() => {
            setIsSelectedModalConfirm(false);
         }}>
         <TouchableWithoutFeedback
            onPress={() => setIsSelectedModalConfirm(false)}>
            <View style={styles.modalOverlay} />
         </TouchableWithoutFeedback>
         <View style={styles.modalContentView}>
            <View style={styles.firstLineModal}>
               <Feather onPress={() => setIsSelectedModalConfirm(false)} name="x" size={28} color="white" />
               <Text style={styles.textshare}>{text}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
         <TouchableOpacity style={styles.confirmbuttonyes} onPress={signOut} ><Text>Sim</Text></TouchableOpacity>
         <TouchableOpacity style={styles.confirmbuttonno} onPress={() => setIsSelectedModalConfirm(false)}><Text>Não</Text></TouchableOpacity>
            </View>
         </View>
      </Modal>


   )
}

