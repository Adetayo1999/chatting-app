import React, { Component, PureComponent } from 'react'
import MemoCompo from './MemoCompo'
class ParentComponent extends PureComponent {
   constructor(props) {
       super(props)
   
       this.state = {
            name:"Tomiwa"
       }
   }
   componentDidMount(){

       setInterval(() => {
           this.setState({
               state:"Tomiwa"
           })
       },2000);
   }
   
   
    render() {
        console.log('Hello From ParentComponent======+++++')
        return (
            <div>
                <MemoCompo name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
