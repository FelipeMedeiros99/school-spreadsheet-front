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

function validToken(token: string){
  if(!token){
    const localStorageData = localStorage.getItem("school-spreadsheet")
    if(localStorageData){
      token = JSON.parse(localStorageData)?.token
      return token;
    }
    return "Invalid_token"
  } 
  return token;

}


const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 7000
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

export async function getStudents(page: number, token: string){
  token = validToken(token)
  try{
    const response = await api.get(`/students?page=${page}&type=&filter=`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}

// TODO
export async function getQtStudents(token: string){
  token = validToken(token)
  try{
    const response = await api.get(`/students/count?type=""&filter=""`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}
