import React from 'react'
import {useRouteMatch ,Switch} from 'react-router-dom';
import { ProtectedRoute } from '../login/ProtectedRoute'
import TestEnviroment from "../TestEnviroment/TestEnviroment"
import TestInstructions from "../TestInstructions/TestInstructions";
import Submit from "../submit/submit"

 const Layout2 = (props) => {
    const {isAuth}= props;
    const {path}=useRouteMatch()
    return(
        <div className="app_main_content">
        <Switch>
        <ProtectedRoute path={`${path}/testInstruction/:id`} auth={isAuth} Component={TestInstructions}/>
        <ProtectedRoute path={`${path}/testEnviroment/:id`} auth={isAuth} Component={TestEnviroment}/>
        <ProtectedRoute path={`${path}/submit/:id`} auth={isAuth} Component={Submit}/>
        </Switch>
    </div>
    )
}
export default Layout2;
