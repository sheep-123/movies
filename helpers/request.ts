import axios from "axios";
const app=axios.create({
    baseURL:'http://localhost:3000/api',
    timeout:5000
})

app.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

app.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export const get= <T>(url:string,params?:Record<string,unknown>)=>{
    return app.get<T>(url,{params})
}

export const post = <T>(url: string, data?: Record<string, unknown>) => {
    return app.post<T>(url, data);
};

export const upload = <T>(url: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return app.post<T>(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export  default app
