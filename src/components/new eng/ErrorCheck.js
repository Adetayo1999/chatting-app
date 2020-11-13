import React, { Component } from 'react'


class ErrorCheck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error:false
        }
    }
    static getDerivedStateFromError(){
        return {error:true}
    }
    
    render() {
        return (
            <div className = "error-check">
                {this.state.error ?
                <p style={{color:"red"}}>Something Went Wrong</p>
                :
                <div>
                {this.props.children}
                </div>
            }
            </div>
        )
    }
}

export default ErrorCheck
