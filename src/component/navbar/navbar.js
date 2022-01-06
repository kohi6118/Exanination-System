import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SpeedIcon from '@mui/icons-material/Speed';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link, useRouteMatch } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import "./navbar.css";
const Navbar = (props)=>{
const [value, setValue] = React.useState('recents');
const {url,path}=useRouteMatch()
const handleChange = (event, newValue) => {
    setValue(newValue);
  }
return (
    <div className="Navbar">
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}className="nav-items">
<Link to={`${url}home`}>
      <BottomNavigationAction
        label="test"
        value="test"
        icon={<SpeedIcon className="nav-icons"/>}/>
</Link>
<Link to={`${url}performance`}>
      <BottomNavigationAction
        label="performance"
        value="performance"
        icon={<ShowChartIcon className="nav-icons"/>}
      />
</Link>
<Link to={`${url}answerKey`}>
      <BottomNavigationAction
        label="Answer Key"
        value="Answer Key"
        icon={<ListAltIcon className="nav-icons"/>}
      />
</Link>
<BottomNavigationAction
    label="Logout"
    value="Logout"
    icon={<LogoutIcon className="nav-icons"/>}
    onClick={()=>{props.logout()}}/>
</BottomNavigation>
    </div>
  );
}
export default Navbar;