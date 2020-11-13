 import React from 'react'
 import './StyleSheet.css'

function StyleSheet({thing}) {

   let  sometin = thing ? 'sometin' : ''
    return (
        <div className ={sometin}>
            <h2>Hello World</h2>
            <p>I am a conditionally rendered style using the ternary operator</p>
        </div>
    )
}

export default StyleSheet
