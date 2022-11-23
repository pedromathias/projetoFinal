import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

container:{

backgroundColor:'#0E3B43',
width:'100%',
height:'100%',
alignItems:'center'
    
},

titulo:{
    fontSize:40,
    marginVertical:130,
    color:'white'
},

userinput:{
    backgroundColor:'#868686',
    width:'80%',
    height:50,
    borderRadius:10,
    color:'white',
    paddingLeft:15,
    marginBottom:15
},

passwordinput:{
    backgroundColor:'#868686',
    width:'80%',
    height:50,
    borderRadius:10,
    color:'white',
    paddingLeft:15,
    marginBottom:30
},

loginbutton:{
    backgroundColor:'#868686',
    width:100,
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
    
},

loginbuttontext:{
    color:'white',
    fontSize:24
},

line:{
    marginBottom:100
},

bottomview:{
flexDirection:'row'
},

bottomtext:{
    color:'white',
    fontSize: 20
},

bottomtext2:{
    color:'blue',
    textDecorationLine:'underline',
    fontSize: 20
},

eyevisible:{
    position:'absolute',
    right:60,
    top:393,
    zIndex:10
}
})