import React from 'react'

function HoverMe2({count , increase}) {
    return (
        <div>
            <h1 onMouseOver = {increase}>Hovered Me {count} times</h1>
        </div>
    )
}

export default HoverMe2
