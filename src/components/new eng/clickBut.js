import React from 'react'

function ClickBut({count , increment}) {
    return (
        <div>
           <button onClick ={increment}>clicked {count} times</button>
        </div>
    )
}

export default ClickBut
