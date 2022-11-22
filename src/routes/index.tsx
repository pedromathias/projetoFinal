// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import ShopIcon from '../assets/icons/storefront_FILL0_wght400_GRAD0_opsz48.png'
// import SkillsIcon from '../assets/icons/fact_check_FILL0_wght400_GRAD0_opsz48.png'

// const Tab = createBottomTabNavigator<RootTabParamList>();

// export type RootRootTabParamList = {
//     Home: undefined;
//     Perfil: undefined;
//     Carrinho: undefined;
// }

// const TabNavigator = () => {

//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: "#ff0000",
//                 tabBarInactiveTintColor: "#aaa",
//                 tabBarInactiveBackgroundColor: "#000",
//                 tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 }
//             }}
//         >

//             <Tab.Screen
//                 name='Home'
//                 component={Home}
//                 options={{
//                     tabBarIcon: ({ color }) => {
//                         return (
//                         )
//                     }
//                 }}
//             />
//             <Tab.Screen
//                 name="Perfil"
//                 component={Perfil}
//                 options={{
//                     tabBarIcon: ({ color }) => {
//                         return (
//                         )
//                     }
//                 }}
//             />
//         </Tab.Navigator>
//     )

// }

// export function Routes() {
//     return (
//         <NavigationContainer>
//             <TabNavigator />
//         </NavigationContainer>
//     );
// }