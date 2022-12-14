import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from "../Context/Auth";
import { Home } from "../screens/Home";
import { Perfil } from "../screens/Perfil";
import { Carrinho } from "../screens/Carrinho";
import { Login } from "../screens/Login";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Cadastro } from "../screens/Cadastro";
import { Produto } from "../screens/Produto";
import { View, Text } from "react-native";
import { Pedidos } from "../screens/Pedidos";

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: undefined;
  Perfil: undefined;
  Carrinho: undefined;
  Login: undefined;
  Cadastro: undefined;
  Entrar: undefined;
  Produto: undefined;
  Inicio: undefined;
  Pedidos: undefined;
  User: undefined;
};

function Produtos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name= "Produto" component={Produto} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Inicio() {
  return (
    <Tab.Screen
        name="Inicio"
        component={Produtos}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
      />
  );
}

function TelaPerfil() {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Perfil" component={Perfil} options={{ headerShown: false }}/>
      <Stack.Screen name= "Pedidos" component={Pedidos} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Logado() {
  return (
    <Tab.Screen
      name="User"
      component={TelaPerfil}
      options={{
        tabBarIcon: ({ color }) => {
          return <FontAwesome5 name="user-alt" size={24} color={color} />;
        },
      }}
    />
  );
}

function TelaLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name= "Cadastro" component={Cadastro} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Entrar() {
  return (
    <Tab.Screen
      name="Entrar"
      component={TelaLogin}
      options={{
        tabBarIcon: ({ color }) => {
          return <FontAwesome5 name="user-alt" size={24} color={color} />;
        },
      }}
    />
  );
}

function Comprar() {
  return (
    <Tab.Screen
      name="Carrinho"
      component={Carrinho}
      options={{
        tabBarIcon: ({ color }) => {
          return <Entypo name="shopping-cart" size={24} color={color} />;
        },
      }}
    />
  );
}

const TabNavigator = () => {
  
  const {authData, isLoading} = useAuth();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#868686",
        tabBarInactiveBackgroundColor: "#1f1e25",
        tabBarStyle: { backgroundColor: "#1f1e25", paddingBottom: 2 },
      }}
    >
        {Inicio()}
        {authData ? Logado() : Entrar()}
        {Comprar()}

    </Tab.Navigator>
  );
};

export function Routes() {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
