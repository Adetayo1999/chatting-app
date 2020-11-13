import React from 'react'
import './Greet.css'

function Greet({Username , gmail}) {
    return (
        <div className="Greet">
            <h1>Hello {Username}</h1>
            <p>Hello {gmail} Hope You Are Doing Fine?</p>
            <p>I am a functional stateless component</p>
            <p>Oops sorry seems i'm no longer stateless</p>
            <p>I am a functional stateful component now</p>
        </div>
    )
}

export default Greet


