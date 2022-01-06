import React from 'react'
import Navbar from "../navbar/navbar";
import Header from '../header/header';
import { ProtectedRoute} from '../login/ProtectedRoute';
import Performance from "../Performance/Performance";
import Home from "../home/Home";
import AnswerKey from "../AnswerKey/AnswerKey";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import PDFView from "../Pdfviewer/pdfviewer";
import Review from "../review/review";
const layout1 = (props) => {
    const {isAuth,logout}= props;
    const {path,url}= new useRouteMatch();
    console.log(isAuth);
    return (
        <>
      <Header/>
    <div className="app_main_content">
        <Switch>
        <ProtectedRoute path={`${path}answerKey`} auth={isAuth} Component={AnswerKey}/>
        <ProtectedRoute path={`${path}performance`} auth={isAuth} Component={Performance}/>
        <ProtectedRoute path={`${path}preview/:id`}auth={isAuth}Component={PDFView}/>
        <ProtectedRoute path={`${path}review/:id`}auth={isAuth}Component={Review}/>   
        <ProtectedRoute path={`${path}`} auth={isAuth} Component={Home}/>     
        </Switch>
    </div>
    <Navbar logout={logout}/>   
        </>
    )
}
export default layout1;
