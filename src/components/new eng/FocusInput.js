import React, { Component } from 'react'
import Input from './input'


 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
         this.myRef = React.createRef()
     }
     handleClick = () => {
        //  this.myRef.current.focusInput()
        this.myRef.current.mehnFuck()
     }
    render() {
        console.log(this.myRef)
        return (
            <div>
              <Input ref ={this.myRef}/>
              <button onClick={this.handleClick}>Focus Input</button>  
            
            </div>
        )
    }
}

export default FocusInput
