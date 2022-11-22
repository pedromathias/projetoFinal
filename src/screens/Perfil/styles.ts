import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {

        backgroundColor: '#0E3B43',
        width: '100%',
        height: '100%',
        alignItems: 'center'

    },

    titulo:{

        marginTop:50,
        fontSize:42,
        color:'white',

    },

    content:{

        backgroundColor: '#A5A5A5',
        height:'80%',
        width:'90%',
        borderRadius:15,
        alignItems:'center'

    },

    imageprofile:{

        height:150,
        width:150,
        marginTop: 50,
        borderRadius:100

    },

    editprofilebutton:{
        width:150,
        height:40,
        backgroundColor:'#1F2D39',
        justifyContent:'center',
        borderRadius:6,
        marginTop:10
    },

    editprofiletext:{
        color:'white',
        textAlign:'center'
    },

    optionsprofile:{
        width:'90%',
        height:40,
        backgroundColor:'#4B5D6D',
        flexDirection:'row',
        paddingTop:5,
        paddingLeft:10,
        borderRadius:6,
        marginBottom:20

    },

    iconbutton:{
        marginRight:20
    }

})