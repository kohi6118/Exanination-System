import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css";
import {Link,useRouteMatch} from "react-router-dom";
const CardCompnenet =(props)=> {
  const data=props.data;
  const [status, setstatus] = useState("");
  const addLeadingZeros=(n)=> {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  const DateFormat=(value)=>{
    let IndiaDatetime = new Date(value).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    let currentDatetime=new Date(IndiaDatetime);
    let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate());
    return formattedDate;
  }
  const TimeFormat=(value)=>{
    let IndiaDatetime = new Date(value).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    let currentDatetime=new Date(IndiaDatetime);
    let formattedTime =addLeadingZeros(currentDatetime.getHours()) + ":" + addLeadingZeros(currentDatetime.getMinutes());
    return formattedTime;
  }
  const prefunction=()=>{
    let starting_time=new  Date(data.timmingStart);
    let ending_time=new Date(data.timingEnd);
    let current_time=new Date();
    if(current_time-ending_time>0){
      setstatus("ended");
    }
    else if((current_time-starting_time)<0){
         setstatus("upcoming");
    }
    else if(current_time-starting_time>=0 && ending_time-current_time>=0){
         setstatus("goingon")
    }
  }
  const showButton=(id)=>{
  if(status==="ended"){
   return (<Link to={`review/${data.testId}`}style={{textDecoration:"none"}}><Button variant="contained"className="card-button">Review</Button> 
   </Link>);
  }
  else if(status==="upcoming"){
    return(<Button variant="contained"className="card-button"disabled>disabled link</Button>);
  }
  else{
    return (<Link to={`test/testInstruction/${data.testId}`}><Button variant="contained"className="card-button">start</Button>
    </Link>);
  }
}
const startdate=DateFormat(data.timmingStart);
const endDate=DateFormat(data.timingEnd);
const startTime=TimeFormat(data.timmingStart);
const endTime=TimeFormat(data.timingEnd);
const TimeTaken= (new Date(data.timingEnd)-new Date(data.timmingStart))/60000;
!status && prefunction();
  return (
   props &&  <Card sx={{ minWidth: 275 }}className={`${status} card`}>
      <CardContent>
        <Typography variant="h5" className="card_heading">
         {data.testName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} className="card_body">
          starting date {startdate} {startTime}
          <br />
          ending date {endDate} {endTime}
          <br />
          number of question {data.numberOfQuestion}
          <br />
          Time {TimeTaken} minutes
          <br/>
          Full Marks {data.marks} 
        </Typography>
      </CardContent>
      <CardActions>
         {showButton(data.testId)}
      </CardActions>
    </Card>
  );
}
export default CardCompnenet;