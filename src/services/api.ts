import axios, { AxiosResponse } from "axios";

const apiBulinha = axios.create({
    baseURL: 'https://d684-2804-d41-a7a1-cc00-51e6-7714-1b26-f254.sa.ngrok.io'
});

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



export function getProdutos(): Promise<AxiosResponse<listaProdutos[], any>> {
    let url = `produto/`;

    return apiBulinha.get(url);
}


export interface produtoStatusProps {
    id: number,
    nome: string,
    nomeCategoria: string,
    descricao: string,
    fotoLink: string;
    url: string;
}

export function getEquipementoEspecifico(id: number ): Promise<AxiosResponse<produtoStatusProps | any>> {
    let url = `produto/${id}`

    return apiBulinha.get(url);
}