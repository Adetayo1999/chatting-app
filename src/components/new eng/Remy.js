import React, { Component } from 'react'

 class Remy extends Component {
    render() {
        const {increment , count} = this.props
        return (
            <div className="hover">
                <h1 onMouseOver={increment}>Hovered Me {count} times</h1>
            </div>
        )
    }
}

export default Remy
