import axios from "axios";
import { CredentialUser } from "../App";

export interface SignInUserData {
  email:  string;
  password: string;
}

export interface SignUpUserData {
  email:  string;
  password: string;
  confirmPassword: string
}

export interface SaveStudentData {
  age: number;
  userId: number;
  class: string;
  name: string
}

function validToken(credentialUser: CredentialUser){
  if(!credentialUser.token || isNaN(credentialUser.userId)){
    const localStorageData = localStorage.getItem("school-spreadsheet")
    if(localStorageData){
      credentialUser = JSON.parse(localStorageData)?.credentialUser
      return credentialUser;
    }
    return {userId: NaN, token: "invalid_Token"}
  } 
  return credentialUser;

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

export async function getStudents(page: number, credentialUser: CredentialUser){
  credentialUser = validToken(credentialUser)
  try{
    const response = await api.get(`/students?page=${page-1}&type=&filter=`, {
      headers: {
        Authorization: `Bearer ${credentialUser.token}`
      }
    });
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}

export async function getQtStudents(credentialUSer: CredentialUser){
  credentialUSer = validToken(credentialUSer)
  try{
    const response = await api.get(`/students/count?type=""&filter=""`, {
      headers: {
        Authorization: `Bearer ${credentialUSer.token}`
      }
    });
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}

export async function deleteStudentApi(credentialUser: CredentialUser, studentId: number){
  credentialUser = validToken(credentialUser)
  try{
    const response = await api.delete(`/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${credentialUser.token}`
      }
    });
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}


export async function addStudentApi(credentialUser: CredentialUser, studentData: SaveStudentData){
  credentialUser = validToken(credentialUser)
  console.log("credentialUSer: ", credentialUser)
  try{
    const response = await api.post(`/students`, {...studentData, userId: credentialUser.userId}, {
      headers: {
        Authorization: `Bearer ${credentialUser.token}`
      }
    });
    return response;
  }catch(e){
    console.log(e)
    return (e as any)?.response;
  }
}