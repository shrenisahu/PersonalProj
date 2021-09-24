import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from "./Card"
import Box2 from './Box2';
import Button from './Button';
import DataCard from './DataCard';

import Height from './Upper';
function App() {
  return (
    <div className="App">
     <div className="div-1">


<Card/>
     </div>


     <div className="div-4">
       <div className="div-2" style={{height:'200px'}}>
<Button/>
<Height/>
{/* <DataCard/> */}
       </div>

       <div className="div-3">
         <Box2/>
       
       </div>
       </div>
    </div>
  );
}

export default App;
