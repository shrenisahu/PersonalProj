import React ,{useState}from 'react'
import Button from '@mui/material/Button';
import { data } from './DataBase';
function DesignButton() {



    const[value,setValue]=useState(3);
    const [data1,setData1]=useState(false)
    const [data2,setData2]=useState(false)
const Change=(key)=>{
console.log(key)
    setValue(key)
}
    return (
        <div>



<button key="1" onClick={()=>{Change(1)}} value={1} id="1" >a</button>  
           <Button variant="outlined">Personalized with LinkedIN Recent Activity</Button>
           <br/>
           <Button variant="outlined">Personalized with LinkedIN Recent Activity</Button>
           <Button variant="outlined">Personalized with LinkedIN Recent Activity</Button>
           <Button variant="outlined">Personalized with LinkedIN Recent Activity</Button>


<h1>{data[value]}</h1>
        </div>



    )
}

export default DesignButton
