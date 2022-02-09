import api from "./api";

const register = (
    role, firstName, lastName, email, 
    password, businessName, abn ) =>{
        return api
          .post(
            "/register",
            {
              role,
              firstName,
              lastName,
              email,
              password,
              businessName,
              abn,
            },
            { withCredentials: true }
          )
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.date))
            }
            return response.data
          })
    }


const login = (email, password ) =>{
    return api
    .post('/login', {
        email,
        password
    }, {withCredentials: true})
    .then((response) => {
        if (response.data){
            console.log(response.data)
            // localStorage.setItem("user", JSON.stringify(response.date))
        }
        return response.data
    })
}

const logout = () =>{
    localStorage.removeItem("user")
}

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"))
}

export default {
    register,
    login,
    logout,
    getCurrentUser
}