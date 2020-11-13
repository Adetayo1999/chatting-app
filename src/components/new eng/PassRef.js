import React, { Component } from 'react'

class PassRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.newRef = React.createRef()
    }
    
    focusComponent(){
        this.newRef.current.focus()
    }
    render(){
    // console.log(this.newRef)
    return (
        <div>
            <input  ref={this.newRef}/>
        </div>
    )
}
}
export default PassRef
