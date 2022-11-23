import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { Perfil } from "../screens/Perfil";
import { Carrinho } from "../screens/Carrinho";
import { Login } from "../screens/Login";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Cadastro } from "../screens/Cadastro";

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: undefined;
  Perfil: undefined;
  Carrinho: undefined;
  Login: undefined;
  Cadastro: undefined;
};
function Inicio() {
  return (
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
      />
  );
}

function Logado() {
  return (
    <Tab.Screen
      name="Perfil"
      component={Perfil}
      options={{
        tabBarIcon: ({ color }) => {
          return <FontAwesome5 name="user-alt" size={24} color={color} />;
        },
      }}
    />
  );
}

function Entrar() {
  return (
    <Tab.Screen
      name="Login"
      component={Login}
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
  
    const verificar = false;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff0000",
        tabBarInactiveTintColor: "#aaa",
        tabBarInactiveBackgroundColor: "#000",
        tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 },
      }}
    >
        {Inicio()}
        {verificar ? Logado() : Entrar()}
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

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
