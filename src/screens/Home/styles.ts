import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 10
    },

    listaProduto:{
        marginTop: 150
    listStyle: "none",
    display: "grid",
  /* aqui ta deixando responsivo com o minmax */
  gridTemplateColumns: repeat(5, minmax(100px, 1fr)),
  columnGap: 3,
  rowGap: 4,
    },
  });