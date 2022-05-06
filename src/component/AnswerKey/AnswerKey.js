import React from 'react';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from "react-router-dom";
import "./AnswerKey.css";
const AnswerKey = () => {
    const [Content, setContent] = useState("");
   const data=[
    {
        test_name:"test4",
        testId:4,
        date:"2021-12-10T12:00:00Z",
        marks_get:38,
        max_marks:100
    },
    {
        test_name:"test3",
        testId:3,
        date:"2021-12-01T12:00:00Z",
        marks_get:38,
        max_marks:100
    },
];

    const CreateContent=()=>{
        const sortData=data.sort((value1,value2)=>{
            let millisecondDate1=Date.parse(value1.date);
            let millisecondDate2=Date.parse(value2.date);
              if(millisecondDate1>millisecondDate2)
                 return -1;
            else 
               return 1;
        });
        setContent(sortData);
    }
    !Content && CreateContent();
    const addLeadingZeros=(n)=> {
        if (n <= 9) {
          return "0" + n;
        }
        return n
      }
    const getdate=(value)=>{
        let currentDatetime = new Date(value)
        let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate());
          return formattedDate;
    }
    const gettime=(value)=>{
        let currentDatetime = new Date(value)
        let formattedTime = addLeadingZeros(currentDatetime.getHours()+1) + ":" + addLeadingZeros(currentDatetime.getMinutes() + 1);
          return formattedTime;
    }
    const createUrl=(name,testId)=>{
        let a=testId;
        let b=testId;
        let id=(12*(a+b)*(a+b+1)+b);
        let url=`${name}${id}.pdf`;
        return url;
    }
    const handleDownload=(name,testId)=>{
        let url_part=createUrl(name,testId);
         window.open(`${process.env.PUBLIC_URL}/${url_part}`);
    }
    return (
        <div className="answerkey"> 
        <div className="search-bar">
        </div>
        <div class="accordian">
            {Content && Content.map((value)=>{
                return(
            <div className="accordian_item"key={value.testId}>
                <div className="test">
                    <h1 className="heading">{value.test_name}</h1>
                    <div className='heading_data'>
                    <div className="timing"> 
                        <span className="sdate">{getdate(value.date)}</span>
                        <span className="timming">{gettime(value.date)} </span>
                    </div> 
                    <div className='marks'>
                        <span className='get_marks'>M.O:{value.marks_get}</span>
                        <span className='max_marks'>F.M:{value.max_marks}</span>
                    </div>
                    </div>
                </div>
                <div className="preview">
                 <Link to={`/preview/${createUrl(value.test_name,value.testId)}`}>
                     <VisibilityIcon style={{"width":`${100}%`,"height":`${100}%`}}/></Link>
                </div>
                <div className="download"onClick={()=>{handleDownload(value.test_name,value.testId)}}>
                      <ArrowDownwardIcon style={{"width":`${100}%`,"height":`${100}%`}}/>
                </div>
            </div>);
            })
        }
            </div>
        </div>
    )
}
export default AnswerKey
