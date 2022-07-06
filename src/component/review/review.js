import React from 'react'
import "./review.css";
import Image from '../TestEnviroment/image';
import Text from '../TestEnviroment/text';
import {useParams} from "react-router-dom";
const review = () => {
    const {id}= new useParams();
    const data={
       testId:456,
       test_name:"Test1",
       test_date:"2021-12-14T21:00:00",
       marks_obtained:50,
       total_marks:100,
       answer:[
           {
               questionId:456,
               question:"how are you",
               your_remark:1,
               correct:1,
               correct_answer_text:"good",
               your_answer_text:"good",
           },
           {
            questionId:654,
            question:"do you have home",
            your_remark:2,
            correct:1,
            correct_answer_text:"no",
            your_answer_text:"yes"
        },
        {
            questionId:621,
            question:"have you taken ",
            your_remark:3,
            correct:2,
            correct_answer_text:"no",
            your_answer_text:"yes"
        },
        {
            questionId:623,
            question:"hey what are you doing",
            your_remark:1,
            correct:1,
            correct_answer_text:"coding",
            your_answer_text:"codding"
        },
        {
            questionId:624,
            question:"how can i help you",
            correct:3,
            correct_answer_text:"yes i can",
        },
        {
            questionId:625,
            question:"what is your hobby",
            your_remark:2,
            correct:1,
            correct_answer_text:"cricket",
            your_answer_text:"footbal"
        },
        {
            questionId:623,
            question:"what is your name",
            your_remark:3,
            correct:1,
            correct_answer_text:"kohinoor",
            your_answer_text:"khan"
        },
        {
            questionId:624,
            question:"what are you doing",
            your_remark:2,
            correct:1,
            correct_answer_text:"work",
            your_answer_text:"work"
        },
        {
            questionId:625,
            question:"how is it going",
            your_remark:2,
            correct:1,
            correct_answer_text:"every thing fine",
            your_answer_text:"every thing not good"
        },
        {
            questionId:626,
            question:"how old are you",
            your_remark:2,
            correct:2,
            correct_answer_text:"15",
            your_answer_text:"15"
        },
        {
            questionId:627,
            question:"product of this company",
            question_image:"569.jpeg",
            your_answer_image:"561O1.png",
            your_remark:1,
            correct:1,
            correct_answer_image:"561O1.png",
            correct_answer_text:"google meet",
            your_answer_text:"google meet"
        }]
    };
    const addLeadingZeros=(n)=> {
        if (n <= 9) {
          return "0" + n;
        }
        return n
      }
    const format_date=(value)=>{
        let IndiaDatetime = new Date(value).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        let currentDatetime=new Date(IndiaDatetime);
        let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate());
        return formattedDate;
    }
    let status='skip';
  const  check_status=(value)=>{
      if(value.your_remark===undefined){
          status='skip';
      }
      else if(!(value.your_remark===undefined) && value.your_remark===value.correct){
          status='correct';
      }
      else if(!(value.your_remark===undefined) && value.your_remark!==value.correct){
          status='wrong';
      }
    }
    return (
        <div className='review_contianer'>
         <div className="review_header">
             <div className='review_test_name'>
               {data.test_name}
             </div>
             <div className='review_test_date'>
              {format_date(data.test_date)}
             </div>
             <div className='review_marks'>
                 <span className='marks_obtained'>
                     {data.marks_obtained}
                    </span>
                    <span className='total_marks'>
                        {data.total_marks}
                    </span>
             </div>
         </div>
         <div className='label-box'>
      <div style={{'color':"green"}} >
        right
      </div>
      <div style={{'color':"#00C49F"}} >
      wrong
      </div>
      <div style={{'color':"#FFBB28"}} >
     skip
      </div>
    </div>
         <div className='review_main_section'>
        {
           data.answer.map((value)=>{
            check_status(value);
                return (
                    <div className={`review_main_section_body ${status}`} key={value.questionId}>
                        <div className='review_main_section_body_question'>
                        <Text text={value.question}/>
                          {value.question_image===undefined?'':<Image src={`${process.env.PUBLIC_URL}/Images/${value.question_image}`}
                           style={{"width":`${200}px`,"height":`${200}px`}}/>}
                        </div>
                        <div className='review_main_section_option'>
                            <div className='your_choice'>
                            {value.your_remark===undefined?"":<Text text={value.your_answer_text}/>}
                                {value.your_answer_image===undefined?'':<Image src={`${process.env.PUBLIC_URL}/Images/${value.your_answer_image}`}
                                style={{"width":`${150}px`,"height":`${150}px`}}/>}
                            </div>
                            <div className='right_answer'>
                                <Text text={value.correct_answer_text}/>
                                {value.correct_answer_image===undefined?'':<Image src={`${process.env.PUBLIC_URL}/Images/${value.correct_answer_image}`}
                                style={{"width":`${150}px`,"height":`${150}px`}}/>}
                            </div>
                        </div>
                    </div>
        )
           })
        }
        </div>
        </div>
    )
}
export default review