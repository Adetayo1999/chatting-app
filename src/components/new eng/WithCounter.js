import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent , increment) => {
    class NewComponent extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
         incrementCount = () => {
            this.setState({count:this.state.count+increment})
         }
        
        render(){
            return (
                <div>
              <OriginalComponent count={this.state.count} increase={this.incrementCount}
              {...this.props}
              />       
                </div>
            )
        }
    }
    
    return NewComponent
}
export default UpdatedComponent

