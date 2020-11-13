import React, { Component } from 'react'

 class ErrorBoundry extends Component {
constructor(props) {
    super(props)

    this.state = {
         hasError:false
    }
}


    static getDerivedStateFromError(error){
            return {hasError:true}
     }
     componentDidCatch(error , info){
        console.log(error)
        console.log(info)
     }
    render() {
       
        return (

            <div className= " error-boundry " >
                {this.state.hasError ?
            <p style={color}>Something Went Wrong</p>
            :
            <div>
                {this.props.children}
            </div>    
            }
            </div>
        )
    }
}
const color = {
    color:'red'
}
export default ErrorBoundry
