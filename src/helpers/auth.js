import axios from "axios"

const backendHost = 'http://localhost:5000/api/'
//const backendHost = 'https://reqres.in/api/'

export function login(data){
    return new Promise((res,rej)=>{
        axios.post(backendHost+"login",data)
        .then((result)=>{
            res({...result.data, token:result.headers["x-auth-token"]})
        })
        .catch((err)=>{
            rej(err)
        })
    })
}

export function register(data){
    return new Promise((res,rej)=>{
        axios.post(backendHost+"register",data)
        .then((result)=>{
            res({...result.data, token:result.headers["x-auth-token"]})
        })
        .catch((err)=>{
            rej(err)
        })
    })
}

export function getUserFromLocal(){
    const userStr = localStorage.getItem("auth")
    if(!userStr){ return null }
    return JSON.parse(userStr)
}