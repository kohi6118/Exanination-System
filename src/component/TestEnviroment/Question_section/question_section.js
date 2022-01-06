import React,{useRef,useState} from 'react'
import Text from "../text";
import Image from '../image';
import "./question.css";
import Timmer from "../Timmer";
function Question_section(props){
    const chnageToNext=props.chnageToNext;
    const question=props.question;
    const questionId=question.question_id;
    let option_select=null;
    let input_ref=useRef(null);
    const [option_value, setoption_value] = useState(null);
    // get Option Vlaue
    const getOptionValue=(e)=>{
         const obj={question_id:questionId,yourRemark:e.target.dataset.option};
         input_ref.current=e.target;
         setoption_value(obj);
    }
    /// option Ckick Handeler
    const clickHandler=()=>{
        if(input_ref.current){
        input_ref.current.checked=false;
        input_ref.current=null;
        option_select=null;
        }
        chnageToNext(option_value);
        ResetTimmer();
    }
    /// option clear Response
    const clearResponse=()=>{
        if(input_ref.current){
            input_ref.current.checked=false;
            input_ref.current=null;
        }
        else 
          alert("till now you have not select anythinng");
    }
    const {render,ResetTimmer}= Timmer({time:question.question_time, clickHandler:clickHandler});
    return (
        <>
        <div className="each_question_heading">
            <div className="timmer">
                {render}
            </div>
            <div className="submit_button_box"onClick={()=>{clickHandler()}}>
                <button className="submit_button">
                    Next
                </button>
            </div>
            <div className="clear_response_box"onClick={()=>{clearResponse()}}>
                <button className="clear_response">
                    clear response
                </button>

            </div>
        </div>
        <div className="main_contnet">
        <div className="question_section">
                    <Text text={question.question}style={{"margin":`${5}px`}}/>
                {question.question_image===undefined?'':<Image src={`https://kohi6118.github.io/Images/${question.question_image}`}
                 style={{"box-shadow":`${0}px ${0}px ${2}px grey`,"borderRadius":`${5}px`,"marginTop":`${5}px`}}
                 className='question_image'/>}
        </div>
                <div className="option">
                    {
                        question.option.map((option,index)=>{
                           return ( <label className='option_container'>
                                <Text text={option.text}/>   
                                    { option.image===undefined?'':
                                     <Image src={`https://kohi6118.github.io/Images/${option.image}`}
                                     className='option_image'
                                      style={{"box-shadow":`${0}px ${0}px ${1}px grey`,"borderRadius":`${2}px`}}/>}
                                <input type="radio" onChange={(e)=>{getOptionValue(e)}} name="radio" data-option={index+1}/>
                                <span class="checkmark"></span>
                            </label>);
                    })
                    }
                </div>
            </div>
        </>
    )
}
export default Question_section
