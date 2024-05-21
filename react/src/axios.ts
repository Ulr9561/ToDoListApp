import axios, { AxiosInstance } from "axios";
import { router } from "./main";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const axiosClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "X-Requested-With": "XMLHttpRequest",
    },
});
export const axiosCl: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            router.navigate("/login");
            localStorage.removeItem("token");
            return Promise.reject(error);
        }
        return Promise.reject(error);
    },
);

export default axiosClient;
