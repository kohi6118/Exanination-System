import React,{useState} from 'react';
import "./TestEnviroment.css";
import Question_section from './Question_section/question_section';
import Timmer from "./Timmer";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const TestEnviroment = () => {
    const {id}=useParams();
    const data1=[{
        test_name:"test1",
        testId:456,
        Timming:25000,
        question:[
            {   question_time:1000,
                question_id:561,
                question:"which app do you like to fit here",
                question_image:"561.jpeg",
                option:[{text:"google meet",image:"561O1.png"},{text:"microsoft team",image:"561O2.png"},{text:"amazon"},{text:"adobe"}]
            },
            {
            question_time:1000,
            question_id:568,
            question:"what do you  have now",
            question_image:"568.jpeg",
            option:[{text:"cctv",image:"568O1.png"},{text:"pen",image:"568O2.png"},{text:"brush",image:"568O3.png"},{text:"hammer",image:"568O4.png"}]
            },
            {   question_time:1000,
                question_id:570,
                question:"what he is doing",
                question_image:"570.jpeg",
                option:[{text:"siting"},{text:"dancing"},{text:"claping"},{text:"reading"}]
            }        
        ]
    },
    {
        test_name:"test2",
        testId:546,
        Timming:20,
        question:[
            {
            question_id:568,
            question:"how are you",
            option:["fine","good","superb","fantastic"]
            },
            {
                question_id:561,
                question:"what is your name",
                option:["kohinoor","khan","kohi","nishant"]
            },
            {
                question_id:570,
                question:"how old are you",
                option:["12","13","17","19"]
            }            
        ]
    },
    {
        test_name:"test3",
        testId:390,
        Timming:20,
        question:[
            {
            question_id:568,
            question:"how are you",
            option:["fine","good","superb","fantastic"]
            },
            {
                question_id:561,
                question:"what is your name",
                option:["kohinoor","khan","kohi","nishant"]
            },
            {
                question_id:570,
                question:"how old are you",
                option:["12","13","17","19"]
            }            
        ]
    },
    {
        test_name:"test4",
        testId:378,
        Timming:20,
        question:[
            {
            question_id:568,
            question:"how are you",
            option:["fine","good","superb","fantastic"]
            },
            {
                question_id:561,
                question:"what is your name",
                option:["kohinoor","khan","kohi","nishant"]
            },
            {
                question_id:570,
                question:"how old are you",
                option:["12","13","17","19"]
            }            
        ]
    },
    {
        test_name:"test5",
        testId:456,
        Timming:20,
        question:[
            {
            question_id:568,
            question:"how are you",
            option:["fine","good","superb","fantastic"]
            },
            {
                question_id:561,
                question:"what is your name",
                option:["kohinoor","khan","kohi","nishant"]
            },
            {
                question_id:570,
                question:"how old are you",
                option:["12","13","17","19"]
            }            
        ]
    }
];
const data={
    sid:1,
    testId:id
};
const history=useHistory();
// create Content 
const createContent=(id)=>{
    id=parseInt(id);
    let d=data1.filter((value)=>{
        return(value.testId===id);
    });
    let data2=d[0];
    return data2;
}
const [questionNumber, setquestionNumber] = useState(0);
// redirect to other page when test over 
const authanticate=()=>{
    if(questionNumber>=content.question.length){
        history.push(`/test/submit/${id}`);
    }
}
/// creating question for sending
const createQuestion=(questionNumber)=>{
        authanticate();
        return content.question[questionNumber];
}
const content=createContent(id);
const question=createQuestion(questionNumber);
/// change to next question 
const changeToNext=(option_select)=>{
    setquestionNumber((questionNumber)=>{
        return (questionNumber+1);
    });
}
// submit  when test over
const SubmitHandeler=()=>{
    history.push(`/test/submit/${id}`);
    ResetTimmer();
}
 const {render,ResetTimmer}= Timmer({time:content.Timming, clickHandler:SubmitHandeler});
    return (
         (
        <div>
            <div className="header">
               <h2 className="heading"> </h2>
               <span className="timing_left">
              {
              render
              }
                </span> 
            </div>
            <p className="warning_message">*test will automaticly end after time. </p>
            <div className="question_Section">
            {question===undefined?"":<Question_section data={data}chnageToNext={changeToNext} question={question} />}
            </div>
        </div>)
    )
}
export default TestEnviroment