import React, { Component } from 'react'
import ForwardChild from './ForwardChild'

class ForwardParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
        this.parentRef = React.createRef()
    }
    handleSubmit = () => {
        this.parentRef.current.focus()
    }
    
    render() {
        console.log(this.parentRef)
        return (
            <div>
               <ForwardChild ref ={this.parentRef}/>
               <button onClick= {this.handleSubmit} >Focus Input</button> 
            </div>
        )
    }
}

export default ForwardParent
