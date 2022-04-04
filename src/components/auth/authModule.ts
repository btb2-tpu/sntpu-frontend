import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const TOKEN = "token"

export const setAuthToken = (token: string) => {
    localStorage.setItem(TOKEN, token)
}

export const isAuthenticated = (): boolean => {
    return localStorage.getItem(TOKEN) != null
}

export const clearAndLogout = (): void => {
    localStorage.removeItem(TOKEN)
    window.location.href = "/"
}

export const apiBaseUrl = "http://5a12-109-123-185-33.ngrok.io/api/v1"

export const instance = axios.create({ baseURL: apiBaseUrl })

instance.interceptors.request.use((request) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
        request.headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }
    return request;
});

createAuthRefreshInterceptor(instance, (failedRequest) => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
        if ([401].includes(parseInt(failedRequest?.response?.status, 10)))
            clearAndLogout();
        return Promise.reject();
    }
    return Promise.resolve();
}, { statusCodes: [401] });

