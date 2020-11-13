import React, { useState } from 'react'

function Render({render}) {
  const [count , setCount] = useState(0);
    const increment = () => {
        setCount(count+1)
    }
    return (
        <div>
            {
                render(count , increment)
            }
        </div>
    )
}

export default Render
