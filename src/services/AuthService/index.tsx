import { AuthData } from "../../Context/Auth"


function signIn(email: string, password: string): Promise<AuthData> {

    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            if(password === "123456"){
                resolve({
                    token: "fake-token",
                    email,
                    name: "Logado",
                });
            } else {
                reject(new Error("credenciais invalidas"));
            }
        }, 500);
    });
}

export const authService = {signIn};