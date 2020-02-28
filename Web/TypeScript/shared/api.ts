import { ObjectLiteral } from './objectLiteral';

export interface Api {
    get<T>(url: string): Promise<T>;
    post<T>(url: string, jsonData: ObjectLiteral): Promise<T>;
    put<T>(url: string, jsonData: ObjectLiteral): Promise<T>;
    patch<T>(url: string, jsonData: ObjectLiteral): Promise<T>;
    del<T>(url: string): Promise<T>;
}
