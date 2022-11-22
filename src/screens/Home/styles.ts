import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#0E3B43",
    paddingTop: 45,
    paddingHorizontal: 30
},

title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
},
input: {
    backgroundColor:'#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
},

})