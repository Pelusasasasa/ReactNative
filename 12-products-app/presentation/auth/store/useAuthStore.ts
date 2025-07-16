import { User } from "@/core/auth/interface/user";
import { create } from 'zustand';

export type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

interface AuthState{
    status: AuthStatus;
    token?: string;
    user?: User;

    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logOut: () => Promise<void>;
};



export const usetemplateStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async(email: string, password: string) => {
        return true
    },
    checkStatus: async() => {
    
    },
    logOut: async() => {
        
    }
}))

