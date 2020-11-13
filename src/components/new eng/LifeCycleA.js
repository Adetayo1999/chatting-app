import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Tom"
        }
        console.log("Hello World from the constructor")
    }
    static getDerivedStateFromProps(props, state){
          console.log("LifeCycleA getDerivedStateFromProps")
            return null
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }
    
    render() {
        console.log("LifeCycleA Render")
        return (
            <div>
                LifeCycleA Render
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
