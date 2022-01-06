import React,{useState} from 'react';
import "./dropdown.css";
const Dropdown = (props) => {
    const [open, setopen] = useState(false);
    const {prompt,onchange,value,options,flag}=props;
    return (
        <div className="dropdown">
          <div className="control">
              <div className="select-value">{value.name?value.name:prompt}
                  <div className={`arrow ${open?'open':null}`}onClick={()=>{setopen((prev)=>!prev)}}>
                  </div>
                  <div className={`options ${open?'open':null}`}>
                      {options.map((option)=>{
                          return(
                          <div className={`option ${(flag?option.sid:option.test_id)===value.sid?'selected':''}`}key={(flag?option.sid:option.test_id)}
                          onClick={()=>{
                              const val={
                                id:(flag?option.sid:option.test_id),
                                  name:option.name
                              }
                            onchange(val);
                            setopen(false);
                          }
                        }>{option.name}</div>);
                      })}
                  </div>
              </div>
          </div>                
        </div>
    )
}
export default Dropdown;
