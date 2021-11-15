import React  from "react"
import {useState} from "react"
import data from "./task2.json"
import Checkbox from "./Checkbox"
import './App.css'

const Lastsearch =()=>{
const[search,setSearch] = useState('')

return(
    <div className="Mainbody">
        <center>
            <h1>Enter the city</h1><br/>
            <input className="searchbox" type="text" value={search} placeholder="--Search--" onChange={e => setSearch(e.target.value)}/><br/>
                {console.log(search)} 
                 {data.filter(item =>item.state.toLowerCase().includes(search.toLowerCase())).map((item)=><ul> <li key={item.id}><Checkbox/>{item.state}</li> 
                 {item.city.map((item2)=><li  key={item2.id}><Checkbox/>{item2.name}{console.log(item2.name)}</li>)}
                 </ul>)}  
        </center>
    </div>
)

}
export default Lastsearch