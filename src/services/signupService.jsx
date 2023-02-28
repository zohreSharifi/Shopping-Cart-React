import http from "./httpService"
 const signupUser=(values)=>{
return http.post("baseUrl",values)
}
export default signupUser