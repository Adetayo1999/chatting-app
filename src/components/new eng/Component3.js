import React from 'react'
import { UseConsumer, UseConsumer1 } from './userContext'

function Component3() {
    return (
      <div className="c-3">
        <UseConsumer1>
        {(surname) => {
            return <UseConsumer>
            {(name) => {
             if(name !== null){
                 return <h1>Hello {name} Are You A Member Of The {surname} family ?</h1>
             }

            }}
            
            </UseConsumer>
        }}
        </UseConsumer1> 
    </div>
    )}

export default Component3
