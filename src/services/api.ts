import axios, { AxiosResponse } from "axios";

const apiBulinha = axios.create({
    baseURL: ' https://8975-177-130-3-92.sa.ngrok.io'
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


export function getProdutoEspecifico(id: number ): Promise<AxiosResponse<listaProdutos | any>> {
    let url = `produto/${id}`

    return apiBulinha.get(url);
}