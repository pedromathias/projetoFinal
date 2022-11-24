import axios, { AxiosResponse } from "axios";

export const postApiBulinha = axios.create({
    baseURL:'https://cf01-2804-d41-a72c-a900-9114-ea9f-3b33-123b.sa.ngrok.io/'
});

export interface InsereCliente {
       
    id?: number,
    nome: string,
    usuario: string
    cpf: string,
    dataNascimento: Date,
    email: string,
    endereco: {
      rua: string, 
      numero: string,
      complemento: string,
      bairro: string,
      cidade: string,
      estado: string,
      cep: string,
     
    },
   

}

export function postClientes(cliente: InsereCliente): Promise<AxiosResponse<InsereCliente, any>> {
    let url = `cliente/`;

    return postApiBulinha.post(url, cliente);
}


