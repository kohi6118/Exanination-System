import React from 'react'
import {useState,useEffect} from "react";
import Card from "../Card/Card";
import "./Home.css";
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
const Home = () => {
  const date=new Date();
  const BydefaultStartdate=Date.parse(date)-2419200000;
  const Bydefaultenddate=Date.parse(date)+86400000;
  const [rangedate, setrangedate] = useState({startDate:BydefaultStartdate,endDate:Bydefaultenddate});
  const [content,setContent]= useState(null);
  const start_date1=new Date(Date.parse(date));
  const end_date1=new Date(Date.parse(date)+3600000);
  const start_date2=new Date(Date.parse(date)+7200000);
  const end_date2=new Date(Date.parse(date)+10800000);
  const data={
    test:
      [
        {
          testId:456,
          testName:"test1",
          timmingStart:start_date1,
          timingEnd:end_date1,
          marks:"30",
          numberOfQuestion:30
        },
        {
          testId:546,
          testName:"test2",
          timmingStart:start_date2,
          timingEnd:end_date2,
          marks:"30",
          numberOfQuestion:30
        },
        {
          testId:390,
          testName:"test3",
          timmingStart:"2021-12-12T12:00:00",
          timingEnd:"2021-12-12T12:50:00",
          marks:"30",
          numberOfQuestion:30
        },
        {
          testId:378,
          testName:"test4",
          status:"running",
          timmingStart:"2021-12-15T12:00:00",
          timingEnd:"2021-12-15T15:50:00",
          marks:"30",
          numberOfQuestion:30
        },
        {
          testId:456,
          testName:"test5",
          timmingStart:"2021-12-13T12:00:00",
          timingEnd:"2021-12-02T13:50:00",
          marks:"30",
          numberOfQuestion:30
        }
          ]
  };
  /// adding leading Zero to number 0-9 
  const addLeadingZeros=(n)=> {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  // get Millisecond from given date format
  const  getMillisecond=(value)=>{
    let IndiaDatetime = new Date(value).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    let currentDatetime=new Date(IndiaDatetime);
    let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate());
    const date =Date.parse(formattedDate)
    return date;
  }
// set Date so our card will render according to that

  const setDate=(e)=>{
       let endTime=getMillisecond(e.endDate);
       let startTime=getMillisecond(e.startDate);
       setrangedate({startDate:startTime,endDate:endTime});
  }
  // seting Content
  const SettingContent=(startDatePicker,endDatePicker)=>{
      const array_data=data.test;
      let d=array_data.filter((value)=>{
             return (startDatePicker<=getMillisecond(value.timingEnd) && endDatePicker>=getMillisecond(value.timingEnd));
       });
      return d;
      }
!content && setContent(SettingContent(rangedate.startDate,rangedate.endDate));
useEffect(() => {
  setContent(SettingContent(rangedate.startDate,rangedate.endDate));
}, [rangedate.startDate,rangedate.endDate])
return (
        <div className="all-test">
          <div className="DatePicker">
    <DateRangePickerComponent placeholder="Enter Date Range"
    className="DateField"
      format="dd-MM-yy"
      change={(e)=>{setDate(e)}}></DateRangePickerComponent>
    </div>
        <div className="test-body">
          { 
        content && content.map((value)=>{
              {return (<Card data={value}></Card>)}
        })
      }
        </div>
      </div>
    )
}
export default Home
