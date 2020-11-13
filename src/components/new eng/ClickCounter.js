import React  from 'react'
import UpdatedComponent from './WithCounter'
 function ClickCounter (props) {
        const {increase ,  count} = props
        return (
            <div>
            <button onClick ={increase}>{props.name} Clicked {count} times</button>
                  
            </div>
        )
    }


export default UpdatedComponent(ClickCounter , 2)
