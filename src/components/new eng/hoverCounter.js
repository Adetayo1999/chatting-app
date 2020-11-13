import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

 class HoverCounter extends Component {

   
    render() {
      const {increase , count} = this.props
        return (
            <div>
                <h2 onMouseOver={increase}> Hovered {count} times</h2>
              </div>
        )
    }
}

export default UpdatedComponent(HoverCounter , 3)
