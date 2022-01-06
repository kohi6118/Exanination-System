import React from 'react';
import {Redirect ,Route} from "react-router-dom";

export const ProtectedRoute = ({auth,Component,...rest}) => {
    return (
        <>
         <Route  {...rest} render={(props) => {
                if(auth) return (<Component {...props} />);
                else if(!auth) return(<Redirect to="/login"/>);
         }} >
         </Route>
        </>
    );
}
