import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            posts:[],
            errorMsg:""
       }
       this.getTheData = this.getTheData.bind(this)
   }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        .then(result => this.getTheData(result))
        .catch(error => this.setState({errorMsg:"Problem with connectivity"}))
    }
    getTheData(result){
    this.setState({posts:result.data})
    }
    
    
    render() {
        const { posts , errorMsg} = this.state

        console.log(posts)
        return (
            <div>
             <h1>List Of Posts</h1>
            {/*
               {posts.length ? ( posts.map(post => {
                   return <div key={post.id}>
                       {post.title}</div>
               })) } */}

            {posts && posts.map(post => {
                return(
                    <div className="post" key={post.title}>
                    <h2>{post.title}</h2>
                <p>{post.body}</p>
                    
                    </div>
                    
                )
            }) }
            {errorMsg && <div>
                
            <p>{errorMsg}</p>
                </div>}    
            </div>
        )
    }
}

export default PostList
