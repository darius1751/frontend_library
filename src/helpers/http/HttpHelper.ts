import { HttpException } from "../../models/httpException";

const defaultHeaders = {
    accept:'application/json', 
    "content-type":'application/json'
};
export const HttpHelper = () => {
    
    const http = async <T>(url: string, method: ('GET'|'POST'|'PATCH'|'DELETE'), body:any = null, headers: Record<string, string> ):Promise<T> => {
        headers = {
            ...defaultHeaders,
            ...headers
        };
        const abortController = new AbortController();
        const { signal } = abortController;
        const requestQuery = {
            body,
            method,
            headers,
            signal
        }
        if(method === 'GET')
            delete requestQuery.body;
        else if(headers['content-type'].toLowerCase() === 'application/json')
            requestQuery.body = JSON.stringify(body);
        else if(headers['content-type'].toLowerCase() === 'multipart/form-data'){
            delete requestQuery.headers['content-type'];
        }
        const response = await fetch(url, requestQuery);
        const { ok } = response;
        setTimeout(
            async () =>{
                abortController.abort();
            },
            3000
        );
        return await new Promise<T>(async (resolve, reject) => {
            if(ok)
                resolve(await response.json() as T);
            else
                reject( await response.json() as HttpException);
        })
    }
    const get = async <T>(url: string, headers: Record<string,string> = defaultHeaders): Promise<T> => {
        return await http<T>(url, 'GET', null, headers);
    }
    const post = <T, H>(url: string, body: H, headers: Record<string,string> = defaultHeaders): Promise<T> => {
        return http<T>(url, 'POST', body, headers);
    }
    const del = <T>(url: string, headers: Record<string,string>): Promise<T> => {
        return http<T>(url, 'DELETE', null, headers);
    }
    const patch = <T, H>(url: string, body:H, headers: Record<string,string> = defaultHeaders): Promise<T> => {
        return http<T>(url, 'PATCH', body, headers);
    }
    return {
        get,
        post,
        del,
        patch
    }
}