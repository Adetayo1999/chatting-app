import React from 'react'

// function ForwardChild() {
//     return (
//         <div>
//             <input/>
//         </div>
//     )
// }
  const ForwardChild = React.forwardRef((props, ref) => {
      return (
          <div>
      <input ref={ref}/>
    
      </div>
      )
  })

export default ForwardChild
