import React,{useState,useEffect} from 'react';
import "./Performance.css";
import Chart from "../chart/Linechart";
import Dropdown from "../Dropdown/Dropdown"
import {ResponsiveContainer} from "recharts";
import Piechart  from '../chart/piechart';
const Performance=()=> {   
  const data1 =[
    { 
    sid:1,
    name:"kohinoor khan",
    data:[
    {test_id:1,test_name:"test1",precentageMarks:80},
    {test_id:2,test_name:"test2",precentageMarks:50},
    {test_id:3,test_name:"test3",precentageMarks:60},
    {test_id:4,test_name:"test4",precentageMarks:40},
    {test_id:5,test_name:"test5",precentageMarks:90}],
    marks:[
      {test_id:1,name:"test1",
      precentageOfright:10,
      percentageOfwrong:30,
      percentageOfnegative_marks:60
    },
      {test_id:2,name:"test2",
      precentageOfright:20,
      percentageOfwrong:40,
      percentageOfnegative_marks:40
    },
      {test_id:3,name:"test3",
      precentageOfright:50,
      percentageOfwrong:40,
      percentageOfnegative_marks:10
    },
      {test_id:4,name:"test4",
      precentageOfright:80,
      percentageOfwrong:10,
      percentageOfnegative_marks:10
    },
    {test_id:5,name:"test5",
    precentageOfright:90,
    percentageOfwrong:5,
    percentageOfnegative_marks:5
    }
    ]
  },
  {
    sid:2,
    name:"nishant",
    data:[{test_id:1,test_name:"test1",precentageMarks:70},
    {test_id:2,test_name:"test2",precentageMarks:20},
    {test_id:3,test_name:"test3",precentageMarks:90},
    {test_id:4,test_name:"test4",precentageMarks:10},
    {test_id:5,test_name:"test5",precentageMarks:60}],
    marks:[
      {
      test_id:1,
      name:"test1",
      precentageOfright:80,
      percentageOfwrong:5,
      percentageOfnegative_marks:15
    },
    {
      test_id:2,
      name:"test2",
      precentageOfright:60,
      percentageOfwrong:30,
      percentageOfnegative_marks:10
    },
    {
      test_id:3,
      name:"test3",
      precentageOfright:50,
      percentageOfwrong:40,
      percentageOfnegative_marks:10
    },
    {
      test_id:4,
      name:"test4",
      precentageOfright:90,
      percentageOfwrong:5,
      percentageOfnegative_marks:5
    },
    {
    test_id:5,
    name:"test5",
    precentageOfright:80,
    percentageOfwrong:10,
    percentageOfnegative_marks:10
    }
    ]
  },
  {
    sid:3,
    name:"ankit",
    data:[{test_id:1,test_name:"test1",precentageMarks:90},
    {test_id:2,test_name:"test2",precentageMarks:10},
    {test_id:3,test_name:"test3",precentageMarks:60},
    {test_id:4,test_name:"test4",precentageMarks:50},
    {test_id:5,test_name:"test5",precentageMarks:80}],
    marks:[
      {
      test_id:1,
      name:"test1",
      precentageOfright:10,
      percentageOfwrong:80,
      percentageOfnegative_marks:10
    },
    {
      test_id:2,
      name:"test2",
      precentageOfright:50,
      percentageOfwrong:40,
      percentageOfnegative_marks:10
    },
    {
      test_id:3,
      name:"test3",
      precentageOfright:30,
      percentageOfwrong:60,
      percentageOfnegative_marks:10
    },
    {
      test_id:4,
      name:"test4",
      precentageOfright:80,
      percentageOfwrong:10,
      percentageOfnegative_marks:10
    },
    {
    test_id:5,
    name:"test5",
    precentageOfright:90,
    percentageOfwrong:5,
    percentageOfnegative_marks:5
    }
    ]
  }
];
  const data2=[
  {
    sid:1,
    name:"kohinoor"
  }
  ,{
    sid:2,
    name:"nishnat"
  },
  {
    sid:3,
    name:"ankit"
  }
]; 
    const [dropdownvalue1, setdropdownvalue1] = useState({name:"kohinoor",id:1});
    const [dropdownvalue2, setdropdownvalue2] = useState({name:"nishant",id:2});
    const [dropdownvalue3, setdropdownvalue3] = useState({name:"test3",id:3});
    /// creating Pie Data for pie Chart
const createPieChart =()=>{
    let data4=null;
    if(data3){
    let d=data3.filter((data)=>{
        return(dropdownvalue3.id===data.test_id);
    });
    d=d[0];
    data4=[{name:"right",value:d.precentageOfright},{name:"wrong",value:d.percentageOfwrong},{name:"negative",value:d.percentageOfnegative_marks}];
}
return data4;
}
/// creating data for line Chart 1 after change of dropdown value 1 change
const createDataLinechart1=()=>{
      createdropdownvalue3();
      const d= data1.filter((value)=>{
        return(value.sid===dropdownvalue1.id);
      });
      return d;
}
// creating Data for line chart 2 
const createDataLinechart2=()=>{
      const d=data1.filter((value)=>{
        return(value.sid===dropdownvalue2.id);
      });
      return d;
}
// creating dropDown value for dropdown 3
const createdropdownvalue3=()=>{
        const sid=dropdownvalue1.id;
        let d=data1.filter((value)=>{
           return (value.sid===sid);
        });
        d=d[0].marks;
        return d;
}
let lineChartData={lineChartData1:createDataLinechart1(dropdownvalue1),lineChartData2:createDataLinechart2(dropdownvalue2)};
let data3= createdropdownvalue3();
let piechart=createPieChart();
return (
    <div className="performance">
        <div className="custamize_LineChart">
            <div className="upper_dropdown">
           <div className="dropdown_box"> 
           {<Dropdown  prompt="you select !!" options={data2}
            value={dropdownvalue1} onchange={(val)=>{setdropdownvalue1({id:val.id,name:val.name});}} flag={1}/>
    }</div>
            <div className="dropdown_box"><Dropdown  prompt="you select !!" options={data2}
             value={dropdownvalue2} onchange={(val)=>{setdropdownvalue2({id:val.id,name:val.name});}} flag={1}/></div>
            </div>
        <div className="Linechart">
      <ResponsiveContainer width="100%" height="100%">
       <Chart  data={lineChartData}/>
      </ResponsiveContainer>
      </div>
      </div>
 <div className="custamize_PieChart">
        <div className="bottom_dropdown">
       <div className='dropdown_box'>{data3 && <Dropdown  options={data3} prompt="you select !!" value={dropdownvalue3}
        onchange={(val)=>{setdropdownvalue3({id:val.id,name:val.name});}} flag={0}/>}
        </div>
        </div>
        <div className="Piechart">
        <ResponsiveContainer width="100%" height="100%">
          <Piechart data={piechart}/>
        </ResponsiveContainer>      
        </div>
      </div>
      </div>
    );
  }
export default Performance;

