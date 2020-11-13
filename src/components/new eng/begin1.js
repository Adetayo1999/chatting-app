import React, { Component } from 'react'
import './begin1.css';
import BeginChild from './beginChild'
 class Begin1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName:"Parent"
         }

       this.greetParent= this.greetParent.bind(this);  
     }
     greetParent(params){
         alert(`Hello ${this.state.parentName} from ${params}`)
     }
     
    render() {
        return (
            <div className="begin1">
                <BeginChild greet={this.greetParent}/>
            </div>
        )
    }
}

export default Begin1
