import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export const Header = ({props}) => {

    return(

        <View style={{width:"100%", height:90, backgroundColor: "#0e3b43"}}>
      <Ionicons
        onPress={props}
        style={styles.arrowback}
        name="arrow-back"
        size={35}
        color="white"
      />
      </View>
    )
}