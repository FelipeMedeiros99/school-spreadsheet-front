import axios from "axios";

export interface SignInUserData {
  email:  string;
  password: string;
}

export interface SignUpUserData {
  email:  string;
  password: string;
  confirmPassword: string
}

const localStorageData = localStorage.getItem("school-spreadsheet")
let token = ""
if(localStorageData){
  token = JSON.parse(localStorageData)?.token
}

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 7000,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export async function signIn(userData: SignInUserData){
  try{
    const response = await api.post("/sign-in", userData);
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}

export async function signUp(userData: SignUpUserData){
  try{
    const response = await api.post("/sign-up", userData);
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}

export async function getStudents(page: number){
  try{
    const response = await api.get(`/students?page=${page}&type=&filter=`);
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}
