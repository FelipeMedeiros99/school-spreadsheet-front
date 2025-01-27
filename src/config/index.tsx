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

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 7000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})

export async function signIn(userData: SignInUserData){
  try{
    const response = await api.post("/sign-in", userData)
    console.log("estou aqui: ", response)
  }catch(e){
    console.log("erro na request: ", (e as any)?.response)
  }
}