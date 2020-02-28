import { Api } from '../interfaces/api';
import { ObjectLiteral } from '../interfaces/objectLiteral';

export class JsonReq implements Api {
    private baseURL: string;
    private fn: (input: RequestInfo, init?: RequestInit) => Promise<Response>;

    constructor(baseUrl: string, fetchFn: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
        this.baseURL = baseUrl;
        this.fn = fetchFn;
    }

    toFullUrl = (url: string) => `${this.baseURL}${url}`

    get = async <T>(url: string): Promise<T> => {
        let response = await this.fn(this.toFullUrl(url));
        return response.json()
    }

    post = async <T>(url: string, jsonData: ObjectLiteral): Promise<T> => {
        console.log(JSON.stringify(jsonData));
        const response = await fetch(this.toFullUrl(url), {
            method: 'POST',
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(jsonData)
        });
        return await response.json();
    }

    put = <T>(url: string, jsonData: ObjectLiteral): Promise<T> => {
        throw new Error("Method not implemented.");
    }

    patch = <T>(url: string, jsonData: ObjectLiteral): Promise<T> => {
        throw new Error("Method not implemented.");
    }

    del = <T>(url: string): Promise<T> => {
        throw new Error("Method not implemented.");
    }
}
