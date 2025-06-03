import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus {
    'checking',
    'autenticado',
    'no-autenticado'
}

interface User {
    name: string,
    email: string
}

interface AuthState {
    status: AuthStatus,
    token?:  string,

    user?: User
    isCheking: boolean,
    isAuthenticated: boolean,


    loginWithPasswordAndemail: (email: string, password: string) => void
    logOut: () => void
}

export const AuthContext =  createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const  AuthProvider = ({children}: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus["no-autenticado"])
        }, 1500);
    }, []);

    const loginWithPasswordAndemail = (email: string, password: string) => {
        console.log(password)
        setUser({
            email,
            name: 'Agustin Lorenzatto'
        });

        setStatus(AuthStatus.autenticado);
    };

    const logOut = () => {
        setUser(undefined);
        setStatus(AuthStatus["no-autenticado"]);
    };

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,

            //Getter
            isCheking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.autenticado,

            //Metdodos
            loginWithPasswordAndemail,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}