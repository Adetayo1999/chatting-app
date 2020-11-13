import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {message:"Welcome Visitor"}
        // this.Subscribe= this.Subscribe.bind(this)
    }
Subscribe(){
    const Sub = "Thank You For Subscribing"
    this.setState({message:Sub})
}

    render(){
        return (
            <div className="message">
               <h1>{this.state.message}</h1> 
               <button onClick={() => this.Subscribe()}>Subscribe</button>
            </div>
        )
    
    }
   }

export default Message
