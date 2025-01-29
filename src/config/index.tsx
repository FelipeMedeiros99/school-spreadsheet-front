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

export interface EditStudentData {
  age: number;
  studentId: number;
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

// dns: 15.228.21.90

const api = axios.create({
  // baseURL: "https://school-spreadsheet-backend.onrender.com",
  baseURL: "http://15.228.21.90:5000",
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

export async function getStudents(page: number = 1, credentialUser: CredentialUser,  filter: string = ""){
  credentialUser = validToken(credentialUser)
  try{
    const response = await api.get(`/students?page=${page-1}&type=name&filter=${filter}`, {
      headers: {
        Authorization: `Bearer ${credentialUser.token}`
      }
    });
    return response;
  }catch(e){
    return (e as any)?.response;
  }
}

export async function getQtStudents(credentialUSer: CredentialUser, filter: string = ""){
  credentialUSer = validToken(credentialUSer)
  try{
    const response = await api.get(`/students/count?type=name&filter=${filter}`, {
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


export async function editStudentApi(credentialUser: CredentialUser, studentData: Omit<EditStudentData, "studentId"> &{studentId: number}){
  credentialUser = validToken(credentialUser)
  try{
    const response = await api.put(`/students`, studentData, {
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