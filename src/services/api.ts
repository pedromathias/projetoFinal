import axios, { AxiosResponse } from "axios";

const apiBulinha = axios.create({
    baseURL: 'http://localhost:8080/'
});

export interface listaProdutos {
    
         dataFabricacao: Date,
          descricao: string,
          fotoLink: string,
          id: number,
          idCategoria:number,
          idFuncionario: number,
          nome: string,
          nomeCategoria: string,
          nomeFuncionario: string,
          qtdEstoque: number,
          valor: number
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