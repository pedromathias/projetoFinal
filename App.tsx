import { StatusBar } from 'expo-status-bar';
import { ProvedorCarrinho } from './src/Context/CarrinhoContexto';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import { Produto } from './src/screens/Produto';

export default function App() {
  return (
    <ProvedorCarrinho>
      <StatusBar style={'light'} />
      <Produto />
    </ProvedorCarrinho>
  );
}
