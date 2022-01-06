import React,{useState,useEffect} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
const Chart = (props) => {
const [data,setdata]= useState("");
const createData=()=>{
       if(props.data.lineChartData1!=null && props.data.lineChartData2!=null){
        const data1=props.data.lineChartData1[0].data;
        const data2=props.data.lineChartData2[0].data;
        let data_prepared=[];
        let i=0;
       for(i;i<5;i++){
         let obj={
            TestId:data1[i].test_id,
            Testname:data2[i].test_name,
            marks1:data1[i].precentageMarks,
            marks2:data2[i].precentageMarks,
          }
          data_prepared[i]=obj;
        }
         setdata(data_prepared);
}
}
useEffect(() => {
  createData();
},[props]);
  return (
        <>
        <ResponsiveContainer width={"95%"} height={"95%"}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            left:10,
            right:10,
            bottom:10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Testname" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="marks2" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>    
        </ResponsiveContainer>
        </>
    )
};
export default Chart
