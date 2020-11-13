import React from 'react'

function HoverText({count , increment }) {
    return (
        <div>
            <h1 onMouseOver={increment}>Hover Here {count} to see sth </h1>
        </div>
    )
}

export default HoverText
