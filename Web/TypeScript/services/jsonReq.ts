import { Api } from '../interfaces/api';
import { ObjectLiteral } from '../interfaces/objectLiteral';

export class JsonReq implements Api {
    private baseURL: string;
    private fn: (input: RequestInfo, init?: RequestInit) => Promise<Response>;

    constructor(baseUrl: string, fetchFn: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
        this.baseURL = baseUrl;
        this.fn = fetchFn;
    }

    get = async <T>(url: string): Promise<T> => {
        let response = await this.fn(`${this.baseURL}${url}`);
        return response.json()
    }

    post = <T>(url: string, jsonData: ObjectLiteral): Promise<T> => {
        throw new Error("Method not implemented.");
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
