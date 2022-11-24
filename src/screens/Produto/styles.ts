import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

container: {

    backgroundColor: '#0E3B43',
    width: '100%',
    height: '100%',
    alignItems: 'center',

},

titulo: {

    fontSize: 42,
    color: 'white',

},

content: {

    backgroundColor: '#A5A5A5',
    height: '85%',
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal:20
},

title:{
    textAlign:'center',
    fontSize: 50,
    marginTop: 30
},
descricao:{
    fontSize:20,
    marginTop: 20,
    marginBottom:50,
    opacity:0.5,
    textAlign:'center'
},
preco:{
    fontSize: 30,
    marginBottom:50
},

categoria:{
    fontSize: 20,
    marginLeft:15,
    marginBottom:20
},

quantidade:{
    fontSize: 20,
    marginLeft:15,
    marginBottom:20
},

img:{
    width: 320,
    height: 320,
    borderRadius:100,
},
image:{
    marginTop: 50,
    height: 300,
    alignItems:'center'
    
},
botaoCarrinho:{
    marginTop: 20,
    backgroundColor: "#111",
    height: 60,
    alignItems: "center",
    borderRadius: 7
},
buttonText:{
    paddingTop: 17,
    fontSize: 24,
    color: "#fff"
}
});

export const botao = StyleSheet.create({

    container: {
        
        width: 340
    }

})