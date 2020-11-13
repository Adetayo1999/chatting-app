import React from 'react'

function HelloWorld({name, gmail , age})
 {
     if(name !== 'Tomiwa'){
         throw new Error('There is a mix up somewhere ')
     }
    return (
        <div className= "hello">

      { name && <p>Hello <b>{name}</b> of age {age} we traced your account <b>{gmail}</b> login on an unidentified source... if this wasn't you click the link below </p>}         
        </div>
    )
}

export default HelloWorld
