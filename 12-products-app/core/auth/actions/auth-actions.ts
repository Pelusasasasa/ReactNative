import { productosApi } from "../../api/productsApi";
import { User } from "../interface/user";

export interface AuthResponse {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
    token:    string;
}

const returnUserToken = ( data: AuthResponse) => {
    const {token, email, fullName, id, isActive, roles} = data;


    const user: User = {
        id, 
        email,
        fullName,
        isActive,
        roles
    };

    return {
        user,
        token
    }
};

export const authLogin  = async(email: string, password: string) => {
    email.toLocaleLowerCase();

    try {
        const { data } = await productosApi.post<AuthResponse>('/auth/login', {
            email, password
        });

        return returnUserToken(data);
    } catch (error) {
        console.log(error);
        // throw new Error('Error al iniciar sesión');
        return null
    }
};

export const authRegister = async(email: string, password: string, fullName: string) => {
    email.toLowerCase();

    try {
        const { data } = await productosApi.post<AuthResponse>('/auth/register', {
            email, password, fullName
        });

        return returnUserToken(data);
    } catch (error) {
        console.log(error);
        return null
    }
};


export const authCheckStatus = async() => {
    try {
        const { data } = await productosApi.get<AuthResponse>('/auth/check-status');
        return returnUserToken(data);
    } catch (error) {
        return null;
    }
};