import { createContext, useState } from "react";
import axiosClient from "../axios";

interface AuthProviderProps {
    children: React.ReactNode;
}
type User = {
    username: string;
    id: number;
    email: string;
};
const AuthContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
    csrfToken: () => Promise<boolean>;
}>({
    user: null,
    setUser: () => {},
    csrfToken: async () => true,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const storedUser = localStorage.getItem('user');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    const [user, _setUser] = useState<User | null>(initialUser);

    const setUser = (user: User | null) => {
        if (user !== null) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
        _setUser(user);
    };

    const csrfToken = async () => {
        await axiosClient.get('http://localhost:8000/sanctum/csrf-cookie');
        console.log();
        return true;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, csrfToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
