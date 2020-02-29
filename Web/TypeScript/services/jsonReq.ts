import { Api } from '../shared/api';
import { ObjectLiteral } from '../shared/objectLiteral';

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
        const response = await this.fn(this.toFullUrl(url), {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        return await response.json();
    }

    put = async <T>(url: string, jsonData: ObjectLiteral): Promise<T> => {
        const response = await this.fn(this.toFullUrl(url), {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        return await response.json();
    }

    patch = async <T>(url: string, jsonData: ObjectLiteral): Promise<T> => {
        const response = await this.fn(this.toFullUrl(url), {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        return await response.json();
    }

    del = async <T>(url: string): Promise<T> => {
        const response = await this.fn(this.toFullUrl(url), {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    }
}
