import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./submit.css";
 const submit = () => {
     const history= new useHistory();
    const  createData=()=> {
      const rows = [
           {name:"number_of_attempted",number:`${50}%`},
           {name:"number_of_skip",number:`${30}%`},
           {name:"number_of_left",number:`${20}%`}
      ];
      return rows;
    }
    const FiveSecond=()=>{
       setTimeout(() => {
           history.push("/home");
       }, 5000);
    }
    FiveSecond();
    const data=createData();
    return (
        <>
          <h1 className='submit_heading'style={{"alignItem":"center"}}>submit .....</h1>
          <div className='submit_table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>category</TableCell>
            <TableCell >number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           { data.map((value,index)=>{
               return (
                <TableRow  key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                   <TableCell component="th" scope="row">
                       {value.name} 
                    </TableCell> 
                    <TableCell component="th" scope="row">
                       {value.number} 
                    </TableCell> 
                    </TableRow>
               )

            })
        }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
    );
}
export default submit;
