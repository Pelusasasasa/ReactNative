import { authCheckStatus, authLogin, authRegister } from "@/core/auth/actions/auth-actions";
import { User } from "@/core/auth/interface/user";
import { SegureStorageAdapter } from "@/helpers/adapters/secure-storage";
import { create } from 'zustand';

export type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

interface AuthState{
    status: AuthStatus;
    token?: string;
    user?: User;

    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logOut: () => Promise<void>;
    register: (email: string, password: string, fullName: string) => Promise<boolean>;

    changeStatus: (token?:string, user?:User) => Promise<boolean>;
};


export const useAuthStore = create<AuthState>()((set, get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
    

    changeStatus: async(token?: string, user?: User) => {
        
        if(!token || !user) {
            set({ status: 'not-authenticated', token: undefined, user: undefined});
            return false;
        }

        set({ status: 'authenticated', token: token, user: user });

        await SegureStorageAdapter.setItem('token', token);

        return true
    },

    login: async(email: string, password: string) => {
        const resp = await authLogin(email, password);

        return get().changeStatus(resp?.token, resp?.user)
        
    },

    checkStatus: async() => {
        const resp = await authCheckStatus();

        get().changeStatus(resp?.token, resp?.user)
    },

    logOut: async() => {
        SegureStorageAdapter.deleteItem('token');
        set({status: 'not-authenticated', token: undefined, user: undefined})
    },

    register: async(email: string, password: string, fullName: string) => {
        const resp = await authRegister(email, password, fullName);
        return get().changeStatus(resp?.token, resp?.user)
    },
}))

