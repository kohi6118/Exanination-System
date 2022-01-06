import React,{useEffect, useState} from 'react';
import { PieChart, Pie, Cell,ResponsiveContainer} from 'recharts';
import "./chart.css" ;
//import LinearScaleIcon from '@material-ui/icons/LinearScale';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Piechart=(props)=> {
  const [data, setdata] =new useState([]);
  useEffect(() => {
    setdata(props.data);
  }, [props])
    return (
      <>
      <div className='label-box'>
      <div style={{'color':"#0088FE"}} >
        right
      </div>
      <div style={{'color':"#00C49F"}} >
      wrong
      </div>
      <div style={{'color':"#FFBB28"}} >
       skip
      </div>
    </div>
      <ResponsiveContainer width={"90%"}height={"90%"}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        </>
    );
  }
export default Piechart;
