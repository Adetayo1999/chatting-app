import React, { Component } from 'react'
import PassRef from './PassRef'

 class FrParentRef extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
         this.parentRef = React.createRef()
         this.targetCompo = this.targetCompo.bind(this)
         
     }

     targetCompo (){
         this.parentRef.current.focusComponent()
     }
     
    render() {
        console.log(this.parentRef)
        return (
            <div>
           <PassRef ref={this.parentRef}/>
           <button onClick={this.targetCompo} >Focus Component</button>     
            </div>
        )
    }
}

export default FrParentRef
