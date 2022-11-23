import { StatusBar } from 'expo-status-bar';
import { ProvedorCarrinho } from './src/Context/CarrinhoContexto';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ProvedorCarrinho>
      <StatusBar style={'light'} />
      <Routes />
    </ProvedorCarrinho>
  );
}
