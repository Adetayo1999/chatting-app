import React, { Component } from 'react'

class Input extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputRef = React.createRef()
      
    }
 focusInput(){
     this.inputRef.current.focus()
 }
   mehnFuck = () => {
       alert("Fuck Y'all Niggers In Black")
   }
   goToHellNigga = () => {
       alert("Oga No Be For Here Boya Kema Lo ooo")
   }

    render(){
        console.log(this.inputRef)
    return (
        <div className="input-ref">
            <input  type="text" ref={this.inputRef}/>
        </div>
    )
    }
}

export default Input
