import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

container: {

    backgroundColor: '#0E3B43',
    width: '100%',
    height: '100%',
    alignItems: 'center'

},

titulo: {

    marginTop: 50,
    fontSize: 42,
    color: 'white',

},

content: {

    backgroundColor: '#A5A5A5',
    height: '85%',
    width: '90%',
    borderRadius: 15,
    alignItems: 'center'
},

title:{
    fontSize: 50,
    marginTop: 30
},
descricao:{
    fontSize:24,
    marginTop: 20
},
preco:{
    fontSize: 30,
    marginTop: 100
},
img:{
    width: 320,
    heigh: 320
},
image:{
    backgroundColor: "#111",
    marginTop: 50,
    height: 300
    
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