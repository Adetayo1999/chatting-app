import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Tom"
        }
        console.log("Hello World from the constructor lifeCycleB")
    }
    static getDerivedStateFromProps(props, state){
          console.log("LifeCycleB getDerivedStateFromProps")
            return null
    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }
    
    render() {
        console.log("LifeCycleB Render")
        return (
            <div>
                LifeCycleB Render
            </div>
        )
    }
}

export default LifeCycleB
