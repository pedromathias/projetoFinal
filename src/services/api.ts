import axios, { AxiosResponse } from "axios";

const apiBulinha = axios.create({
    baseURL: 'http://localhost:8080/'
});

export interface listaProdutos {
    index: string,
    name: string,
    url: string,
    preco?: number
}

interface getProdutosRespostaProps {
    count: number,
    results: listaProdutos[]
}

export function getProdutos(): Promise<AxiosResponse<getProdutosRespostaProps, any>> {
    let url = `produto/`;

    return apiBulinha.get(url);
}
