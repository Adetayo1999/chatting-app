import React from 'react'

function BeginChild({greet}) {
    const name="Adebayo Salami"
    return (
        <div>
            <button onClick={()=> greet(name)}>Greet Parent</button>
        </div>
    )
}

export default BeginChild
