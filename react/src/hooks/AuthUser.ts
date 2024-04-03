import { useContext } from "react"
import AuthContext from "../providers/AuthProvider"

export default function AuthUser() {
    return useContext(AuthContext);
}