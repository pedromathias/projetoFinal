import axios, { AxiosResponse } from "axios";

export const postApiBulinha = axios.create({
    baseURL:'https://6136-2804-d41-a72c-a900-5020-b4df-4701-a52f.sa.ngrok.io'
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


