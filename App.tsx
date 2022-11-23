import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ProvedorCarrinho } from './src/Context/CarrinhoContexto';
import { Cadastro } from './src/screens/Cadastro';
import { Carrinho } from './src/screens/Carrinho';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Perfil } from './src/screens/Perfil';

export default function App() {
  return (
    <ProvedorCarrinho>
      <StatusBar style={'light'} />
      <Carrinho />
    </ProvedorCarrinho>
  );
}
