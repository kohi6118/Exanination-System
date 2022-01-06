import React,{useState,useEffect,useRef} from 'react'
const Timmer = (props) => {
   const [timmer, setTimmer] = useState("00:00:00");
   const time=props.time;
   const changeTonext=props.clickHandler;
   const IntervalRef= useRef("");
   const  getReminnigTime=(endTime)=>{
       if((Date.parse(endTime)-Date.parse(new Date()))<0){
            return ([-1,0,0,0]);
       }
           const total= Date.parse(endTime)-Date.parse(new Date());
           const second=Math.floor(total/1000)%60;
           const minute=Math.floor((total/(1000*60))%60);
           const hour=Math.floor(total/(1000*60*60))%24;
           return ([total,second,minute,hour]);
    }
   const startTimer=(endTime)=>{
   const [total,second,minute,hour]=getReminnigTime(endTime);
     if(total>=0){
     setTimmer(
         (hour>9?hour:'0'+hour)+":"+
        (minute>9?minute:'0'+minute)+":"+
        (second>9?second:'0'+second))
     }
     else{
         //clearInterval(IntervalRef.current);
         changeTonext();
     }
}
const clearTimmer=(endtime)=>{
    if(IntervalRef.current){
        clearInterval(IntervalRef.current);
    }
    const Id=setInterval(()=>{
        startTimer(endtime);      
    },1000);
    IntervalRef.current=Id;
}
const getDeadline=()=>{
    const deadline=new Date();
    deadline.setSeconds(deadline.getSeconds()+time)
    return deadline;
}
    useEffect(() => {
        clearTimmer(getDeadline());
        return () => {
            clearInterval(IntervalRef.current);
        }
    },[]);
    const ResetTimmer=()=>{
        clearInterval(IntervalRef.current);
        clearTimmer(getDeadline());
    }
    return ({
        ResetTimmer:ResetTimmer,
        render:(<>{timmer}</>)
    })
}
export default Timmer;