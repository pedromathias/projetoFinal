import axios, { AxiosResponse } from "axios";

const apiBulinha = axios.create({
    baseURL: 'https://cf01-2804-d41-a72c-a900-9114-ea9f-3b33-123b.sa.ngrok.io'
});

//Lista Produtos
export interface listaProdutos {
    
          descricao: string,
          fotoLink: string,
          id: number,
          idCategoria:number,
          idFuncionario: number,
          nome: string,
          nomeCategoria: string,
          nomeFuncionario: string,
          qtdEstoque: number,
          valor?: number
}
//getProdutos
export function getProdutos(): Promise<AxiosResponse<listaProdutos[], any>> {
    let url = `produto/`;

    return apiBulinha.get(url);
}

//getProdutoPorId
export function getProdutoEspecifico(id: number ): Promise<AxiosResponse<listaProdutos | any>> {
    let url = `produto/${id}`

    return apiBulinha.get(url);
}

//Lista Pedidos
export interface listaPedidos {
    
    id: number,
    pedidoStatus: string,
    dataPedido:string,
}

//getPedidos
export function getPedidos(): Promise<AxiosResponse<listaPedidos[], any>> {
    let url = `pedido/`;

    return apiBulinha.get(url);
}