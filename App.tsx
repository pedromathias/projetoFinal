import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/Context/Auth';
import { ProvedorCarrinho } from './src/Context/CarrinhoContexto';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthProvider>
    <ProvedorCarrinho>
      <StatusBar style={'light'} />
      <Routes />
    </ProvedorCarrinho>
  </AuthProvider>
  );

}
