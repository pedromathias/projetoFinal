import React from "react"
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

interface BotaoProps extends TouchableOpacityProps {
    title: string,
}

export const Botao = ({ title, ...resto }: BotaoProps) => {

    return (
        <TouchableOpacity
            style={styles.signinbutton}
            {...resto}
        >
            <Text
                style={{ color: 'white', fontSize: 20 }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}