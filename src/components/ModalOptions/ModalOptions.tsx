import React from "react";
import { View, Modal, TouchableWithoutFeedback, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Feather, FontAwesome, AntDesign, EvilIcons, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { styles } from "./styles";



export const ModalOptions = ({ isSelectedModal, setIsSelectedModal }) => {

   return (

      <Modal
         animationType="slide"
         transparent={true}
         visible={isSelectedModal}
         onRequestClose={() => {
            setIsSelectedModal(false);
         }}>
         <TouchableWithoutFeedback
            onPress={() => setIsSelectedModal(false)}>
            <View style={styles.modalOverlay} />
         </TouchableWithoutFeedback>
         <View style={styles.modalContentView}>
            <View style={styles.firstLineModal}>
               <Feather onPress={() => setIsSelectedModal(false)} name="x" size={28} color="white" />
               <Text style={styles.textshare}>Editar Perfil</Text>     
            </View>
            <ScrollView>
            <View style={{alignItems:'center', width:'100%'}}>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Nome completo</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Nome de usuário</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>CPF</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Email</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Senha</Text>
                    <TextInput secureTextEntry={true} selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Data de nascimento</Text>
                    <TextInput selectionColor={'#0E3B43'} style={styles.inputemail} />
                </View>
                <View style={styles.view100}>
                    <Text style={styles.textinputemail}>Endereço</Text>
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
                </View>
                <TouchableOpacity style={styles.signinbutton}><Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Salvar</Text></TouchableOpacity>
            </View>
            </ScrollView>
         </View>
      </Modal>


   )
}

