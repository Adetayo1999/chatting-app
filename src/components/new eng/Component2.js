import React, { Component } from 'react'
import Component3 from './Component3'
import UseContext from './userContext'

class Component2 extends Component  {
    render(){
    return (
        <div>
            <h1>Goodbye World {this.context}</h1>
        <Component3 />
        </div>
    )
}}

Component2.contextType = UseContext

export default Component2
