import { defineStore } from "pinia";
import { useAuthenticationStore } from "./auth";


export const useFetchStore = defineStore('fetch', () => {

    const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_FUNCTIONS_BASE_URL_PROD + 'api' : import.meta.env.VITE_FUNCTIONS_BASE_URL + 'api';

    async function getHeaders() {
        const {user} = useAuthenticationStore();
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const token = await user.value?.getIdToken(false);
        if(token) {
            headers.append("Authorization", token);
        }
        return headers;
    }

    async function get(path: string, params = {}) {
        const searchParams = new URLSearchParams(params);
        let url = BASE_URL + path;

        if(searchParams.size > 0) url += '?' + searchParams.toString();
        const headers = await getHeaders();
        const response = await fetch(url, {headers});
        return response.json();
    }

    async function post(path: string, params = {}) {
        const url = BASE_URL + path;

        const headers = await getHeaders();
        const response = await fetch(url, {headers, method: 'POST', body: JSON.stringify(params)});
        return response.json();
    }

    return {
        get,
        post,
    }
});