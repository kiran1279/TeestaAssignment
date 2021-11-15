import React, { Component } from 'react'
import JSON from "./task.json"
import './App.css'

export default class Intern extends Component {
    constructor(props) {
        super(props)
        this.state = {products:JSON
        
        }
    }
    render() {
        return (
            <div className="Mainbody">
                <center>
                {
                    this.state.products.map((item) =>
                        
                           <ul>
                    
                                <li className="firstlevel" key={item.id}><input type="checkbox"/>{item.country}</li>
                                {item.state.map((item2)=>
                                        <ul>
                                        
                                                <li className="secondlevel" key={item2.id}><input type="checkbox"/> {item2.state}</li>
                                                {item2.city.map((item3)=>
                                                
                                                    <li className="thirdlevel"key={item3.id}>
                                                    <input type="checkbox"/> {item3.name}</li>
                                                
                                                
                                                )} 

                                            
                                        </ul>
                                    )
                                } 
                    
                           </ul>
            
                    ) 
                     
                     
                }
                </center>
            </div>
        )
    }
}
