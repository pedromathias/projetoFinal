import axios, { AxiosResponse } from "axios";

export const postApiBulinha = axios.create({
    baseURL:'https://95c7-2804-d41-a7a1-cc00-e436-2c16-67a6-2210.sa.ngrok.io/'
});

export interface InsereCliente {
       
    cpf: string,
    dataNascimento: string,
    email: string,
    endereco: {
      bairro: string,
      cep: string,
      cidade: string,
      complemento: string,
      estado: string,
      numero: string,
      rua: string
    },
    id?: number,
    nome: string,
    usuario: string

}

export function postClientes(cliente: InsereCliente): Promise<AxiosResponse<InsereCliente, any>> {
    let url = `cliente/`;

    return postApiBulinha.post(url, cliente);
}


// https://d625-2804-d41-a72c-a900-a42c-8a9f-8c9b-b13b.sa.ngrok.io