// import React, { useContext, useEffect, useState } from "react";
// import { View, Text } from "react-native"
// import { styles } from './styles';
// import { listaProdutos } from "../../services/api"
// import { getProdutoEspecifico } from "../../services/api";

// export const Produto = () => {

//     const [carregando, setCarregando] = useState<boolean>(false);
//     const [listaEquipamentos, setListaEquipamentos] = useState<listaProdutos[]>([]);

//     useEffect(() => {
//         requisicaoListaProdutos();
//     }, []);

//     function requisicaoListaProdutos() {
//         setCarregando(true);
//         getProdutoEspecifico(produto.id).then((res) => {
//             (res.data.results)
//         }).catch((err) => {
//             console.log(err)
//         }).finally(() => {
//             setCarregando(false);
//         });
//     }

//     return (
//     <View style={styles.container}>
//         <Text style={styles.titulo}>LOLJA</Text>
//         <View style={styles.content}>
//         </View>

//         <View>
            
//         </View>


//     </View>
// )
// }