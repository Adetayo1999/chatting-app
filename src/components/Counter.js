import React, { Component } from 'react'

class Counter extends Component{
constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}
// increment(){
//     this.setState({count:this.state.count +1}, ()=>{console.log('Callback Value' , this.state.count)})
// }
// function has access to the previous state which can  be used to calculate the present state
increment(){
    this.setState(prevState => ({count:prevState.count +1}))
}

incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}

    render() {
        return (
            <div className="Counter">
            <h2>
                Count - {this.state.count}
                </h2>
                <button onClick ={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
