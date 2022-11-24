import axios, { AxiosResponse } from "axios";

export const postApiBulinha = axios.create({
    baseURL:'https://540d-2804-d41-a7a1-cc00-c8aa-57e5-b91e-2c34.sa.ngrok.io/'
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


