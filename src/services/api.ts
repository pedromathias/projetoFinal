import axios, { AxiosResponse } from "axios";

const apiBulinha = axios.create({
    baseURL: 'http://localhost:8080/'
});

export interface listaProdutos {
    id: number,
    nome: string,
    fotoLink: string,
    valor?: number,
    url: string
}

interface getProdutosRespostaProps {
    count: number,
    results: listaProdutos[]
}

export function getProdutos(): Promise<AxiosResponse<getProdutosRespostaProps, any>> {
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