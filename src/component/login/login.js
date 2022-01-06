import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./login.css";
import { Button } from '@mui/material';
import {Link,useHistory} from "react-router-dom";
const login = (props) => {
    const [username,setUsername] = new useState("");
    const [password, setpassword] = new useState("");
    const history=new useHistory();
    const handleUsernameChange=(event)=>setUsername(event.target.value);
    const handlePasswordChange=(event)=>setpassword(event.target.value);
    const Authantication=()=>{
    }
    const  handleSubmit=(e)=>{
        e.preventDefault();
        Authantication();
        props.login();
        history.push("/");        
    }
    return(
        <React.Fragment>
        <div className="form">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <TextField
          required
          id="outlined-required"
          label="username"
          value={username}
          className="input_field"
          onChange={(e)=>handleUsernameChange(e)}/>
         <br/>
        <TextField
          required
          id="outlined-required"
          label="password"
          value={password}
          onChange={(e)=>handlePasswordChange(e)}
          className="input_field"
        />
        <Link to="forgat" className="forgat_link">forgat password</Link>
        <br/>
        <Button variant="contained"className="login_button"type="submit">Login</Button>
        </form> 
        </div>
        <h3 style={{"position":'absolute',"bottom":`${10}%`,"padding":`${20}px`,"color":"white"}}>for demo perpose username 
         <sapn style={{"fontStyle":"italic","color":"red"}}> login </sapn> 
         and password<span style={{"fontStyle":"italic","color":"red"}}> login </span> forgat passwrod is not active for you</h3> 
        </React.Fragment>            
    )
}
export default login
