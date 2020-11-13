import React ,{Component} from 'react'
import './Greet2.css'


class Greet2 extends Component{
    render(){
        const {Username , gmail} = this.props 
    return (
        <div className="Greet2">
            <h1>Hello <span>{Username}</span></h1>
    <p>Hello {gmail} Hope You Are Doing Fine? </p>
     <p>I am a class stateful component</p>
        </div>
    )
}
}

export default Greet2
