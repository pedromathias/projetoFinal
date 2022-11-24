import { StatusBar } from 'expo-status-bar';
import { ProvedorCarrinho } from './src/Context/CarrinhoContexto';
import { Routes } from './src/routes';
import { Cadastro } from './src/screens/Cadastro';


export default function App() {
  return (
    <ProvedorCarrinho>
      <StatusBar style={'light'} />
      <Cadastro />
    </ProvedorCarrinho>
  );
}
