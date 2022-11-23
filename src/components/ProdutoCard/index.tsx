import React, { useContext } from "react";
import { Text, TouchableOpacityProps, TouchableOpacity, Image } from "react-native";
import { listaProdutos } from "../../services/api";
import { styles } from "./styles";
import PicaPau from "../../assets/images/Pica-Pau.jpg"

import CloseIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz48.png";


interface ProdutoCardProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIdSelecionado: React.Dispatch<React.SetStateAction<number>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
}

export const ProdutoCard = ({ produto, setModal,setPrecoSelecionado, setIdSelecionado }: ProdutoCardProps) => {

    // const removeEquipamentoDoCarrinho = useContext(CarrinhoContexto).removeProdutoDoCarrinho

    function abreModal() {
        setIdSelecionado(produto.id);
        setPrecoSelecionado && setPrecoSelecionado(produto.valor)
        setModal(true);
    }

    return (

        <TouchableOpacity onPress={abreModal} style={styles.buttonProdutoItem}>
            <Image  resizeMode="cover" style={styles.image} source={PicaPau}/>
            <Text style={styles.textProdutoItem}>
                {produto.nome}
            </Text>
            
            <Text style={styles.textPrecoItem}>
                R$ {produto.valor},99
            </Text>
        
            {/* {produto.valor &&
                <TouchableOpacity onPress={()=>removeProdutoDoCarrinho(produto.id)}>
                    <Image source={CloseIcon} style={styles.closeIcon}/>
                </TouchableOpacity>
            } */}
        </TouchableOpacity>
    )
}