import React, { Component } from 'react'

class ClickCounter2 extends Component {
  
    
    render() {
        const {count , increase} = this.props
        return (
            <div>
                <button onClick={increase}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounter2
