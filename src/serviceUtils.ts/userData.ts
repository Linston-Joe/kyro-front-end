import { IUserData } from "../components/main-panel/MainPanel"

export const getUser = () => {
    return fetch("http://localhost:3001/user", { method: "GET" });
}

export const saveUser = (user: IUserData) => {
    var myHeaders = {
        "Content-Type": "application/json"
    };
    
    var raw = JSON.stringify(user);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    
    return fetch("http://localhost:3001/user", requestOptions);
}
