import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Cadastro } from './src/screens/Cadastro';
import { Login } from './src/screens/Login';
import { Perfil } from './src/screens/Perfil';

export default function App() {
  return (
    <View>
      <StatusBar style={'light'} />
      <Perfil />
    </View>
  );
}
