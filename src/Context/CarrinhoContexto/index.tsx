import React, { createContext, useEffect, useState } from "react";
import { listaProdutos } from "../../services/api"

//Consigo puxar info do filho
interface ProvedorCarrinhoProps {
    children: React.ReactNode
}

//Declaro o Tipo dele 
interface CarrinhoContextoProps {
    listaDeProdutos: listaProdutos[];
    salvaListaDeProdutos: (listaProdutos: listaProdutos[]) => void
    precoTotal: number
    removerProdutoDoCarrinho: (id: number) => void
}

//Declaro o valor inicial 
export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
    listaDeProdutos: [{

          descricao: "",
          fotoLink: "",
          id: 0,
          idCategoria:0,
          idFuncionario: 0,
          nome: "",
          nomeCategoria: "",
          nomeFuncionario: "",
          qtdEstoque: 0,
          valor: 0
    }],
    salvaListaDeProdutos: (listaProdutos: listaProdutos[]) => { },
    precoTotal: 0,
    removerProdutoDoCarrinho: (id: number) => { },
});

//Provedor de info pro App
export const ProvedorCarrinho = ({ children }: ProvedorCarrinhoProps) => {
    const [listaDeProdutos, setListaDeProdutos] = useState<listaProdutos[]>([]);
    const [precoTotal, setPrecoTotal] = useState<number>(0);

//Realizo a soma dos produtos no carrinho
    useEffect(() => {
        let soma = 0;
        listaDeProdutos.length >= 1 && listaDeProdutos.map((produto: listaProdutos) => {
            soma = soma + Number(produto.valor)
        });
        setPrecoTotal(soma);
    }, [listaDeProdutos])

//Salvar produto
    function salvaListaDeProdutos(listaProdutos: listaProdutos[]) {
        setListaDeProdutos(listaProdutos);
    }

//Remover produto do carrinho
    function removerProdutoDoCarrinho(id: number) {
        let novaListaDeProdutos = listaDeProdutos.filter((produto) => {
            return produto.id !== id
        })
        setListaDeProdutos(novaListaDeProdutos);
    }

    return (

        <CarrinhoContexto.Provider
            value={{
                listaDeProdutos,
                salvaListaDeProdutos,
                precoTotal,
                removerProdutoDoCarrinho
            }}
        >
            {children}

        </CarrinhoContexto.Provider>
    )
}