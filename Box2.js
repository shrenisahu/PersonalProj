import React, { useState } from 'react'
import {data} from "./DataBase.js"
import Message from './Message.js';
const Base=['a','b','c','d','e']

function Box2() {

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
          <button key="2" onClick={()=>{Change(2)}} value={1} id="1" >Box2</button>  
          <button key="3" onClick={()=>{Change(3)}} value={1} id="1" >a</button>  
          <button key="4" onClick={()=>{Change(4)}} value={1} id="1" >a</button>  
    <div>
<h3>{data.map((props)=>props)}</h3>

    </div>      

        </div>
    )
}

export default Box2
