import {useState} from "react";
import { useHistory } from "react-router-dom";
export  function  useAuth(intalvalue){
    const [auth, setauth] = new  useState(intalvalue);
    const history=new useHistory()
    const login=()=>{
        setTimeout(() => {
            setauth(true);
            history.push("/");
        }, 1000);
    }
    const logout=()=>{
        setTimeout(() => {
            setauth(false);
            history.push("/login");
        }, 1000);
    }
    return [login,logout,auth];
}
