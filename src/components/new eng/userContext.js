import React from 'react'

const UseContext = React.createContext()
 const UseProvider = UseContext.Provider
 const UseConsumer = UseContext.Consumer


const UseContext1 = React.createContext()
const UseProvider1 = UseContext1.Provider
const UseConsumer1 = UseContext1.Consumer 


 export { UseConsumer , UseProvider , UseConsumer1 , UseProvider1}
 export default UseContext