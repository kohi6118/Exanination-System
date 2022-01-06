import './App.css';
import React from 'react';
import { Route,Switch} from 'react-router-dom';
import {useAuth} from "./component/login/useAuth";
import Login from "./component/login/login";
import Layout1 from "./component/layout1/layout1";
import Layout2 from './component/layout2/layout2';
function App() {
 const [login,logout,isAuth]= new useAuth(false);
  return (
    <div className="App">
   <div className="container">
    {  
   <Switch>
    <Route path="/login"><Login login={login}/></Route>
    <Route path="/test"render={()=>{
      return(<Layout2 path="/test"isAuth={isAuth}/>)
    }}/>
    <Route path="/"render={()=>{
     return( <Layout1 path="/"isAuth={isAuth}logout={logout} style={{overflowX:"hidden"}}/>);
    }} excat/>
   
   {
   /* <Route path="/performance">
    <Layout1 path="/performance" logout={logout} isAuth={isAuth} Component={Performance}/>
    </Route>
    <Route  path="/answerKey">
    <Layout1 path="/answerKey" logout={logout} isAuth={isAuth} Component={AnswerKey}/>
    </Route>
    <Route path="testInstruction/:id">
    <Layout2 path="testInstruction/:id" Component={TestInstructions}auth={isAuth}/>
    </Route>
    <Route path="testEnviroment/:id">
    <Layout2 path="testEnviroment/:id" Component={TestEnviroment}auth={isAuth}/>
    </Route>
    <Route path="/">
    <Layout1 path="/" logout={logout} isAuth={isAuth} Component={Home}/>
    </Route>
    */}
    </Switch>
}
    </div>
    </div>
  );
}
export default App;