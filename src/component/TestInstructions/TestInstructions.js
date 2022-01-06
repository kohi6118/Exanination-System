import React from "react";
import  "./TestInstructions.css";
import { useParams,Link } from "react-router-dom";
const TestInstructions = () => {
    const data={
        number_of_question:30,
        each_mark:1,
        limit:2,
        negative_mark:0.25,
        skip_mark:0,
        os:"android 5.6",
        ip:"127.0.0.2",
        browser:"chrome 5.6",
        time:"10:30"
    }
    const {id}=useParams();
     return(
         <>
        <div className="testInstruction">
            <ul className="testInstruction-list">
                <li className="list-item">
                    <p className="list-text">
                         there is <span>{data.number_of_question}</span> question each question carrry<span> {data.each_mark}</span> marks  total time is {}
                    </p>
                </li>
                <li className="list-item">
                    <p className="list-text">
                         for each question limit <span>{data.limit}</span>minutes after the limit over the question will change automaticly   
                    </p>
                </li>
                <li className="list-item">
                    <p className="list-text">
                         each wrong answer will lead you <span>{data.negative_mark}</span>negative marking 
                    </p>
                </li>
                <li className="list-item">
                    <p className="list-text">
                         if you will skip the question there is <span>{data.skip_mark}</span>marks will dedicated  
                    </p>
                </li>
                <li className="list-item">
                    <p className="list-text">
                        <span>*use updated version of chrome or firefox or edge 
                            and set accurate time according to +GMT5:30 otherwise you will face issue
                        </span>
                    </p>
                </li>
                <li className="list-item enviroment">
                    <p className="list-text">
                       <span>*Your Enviroment Information</span>
                       <br/>
                       Operating system<span>{data.os}  </span>
                       Browser<span>{data.browser}  </span>
                       IP<span>{data.ip}   </span>
                       Time<span>{data.time}    </span>
                       <br/>
                       click next and start your test <span> Best of Luck!</span> 
                    </p>
                </li>
            </ul>
      <Link to={`/test/testEnviroment/${id}`}><button className="next-button">next</button></Link>
        </div>
        </> );

}
export default TestInstructions
