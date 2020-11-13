import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
           
         userId:'',
           title:'',
           body:''
           
       }
   }
   handleChange = (e)=> {
       this.setState({[e.target.name]:e.target.value})
   }
   submitHandler = (e) => {
       e.preventDefault()
    //   const { userId , title , body}= this.state
   
    axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)
    .then(response => console.log(response))
    .catch(error => console.log(error))
   }
   
    render() {
        const { userId , body ,title} = this.state
        return (
            <div>
                 <form onSubmit={this.submitHandler}>
                <h1>Form Posting</h1>
                <div>
                    <input name="userId" type="text" value={userId} onChange={this.handleChange}/>
                </div>
                <div>
                    <input name="title" type="text" value={title} onChange={this.handleChange}/>
                </div>
                <div>
                    <input name="body" type="text" value={body} onChange={this.handleChange}/>
                </div>
                <input type="submit" />
                </form>
               
            </div>
        )
    }
}

export default PostForm
