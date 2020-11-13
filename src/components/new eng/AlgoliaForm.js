import React, { Component } from 'react'
import axios from 'axios'
const search = 'football'
class AlgoliaForm extends Component {
constructor(props) {
    super(props)

    this.state = {
         list : null,
         searchItem:search
    }
}
 componentDidMount(){
     const {searchItem} = this.state
     axios.get(`https://hn.algolia.com/api/v1/search?query=${searchItem}`)
     .then(result => {console.log(result.data)
            this.getResult(result)
        
    })
     .catch(error => console.log(error))
 }
 getResult = (result) => {
 this.setState({list:result.data})
 }


    render() {
       const { list} = this.state
     
        return (
            <div>
             { list && (  list.hits.map(item => {

               return (
                   <div key = {item.id}> 
               <h1>{item.title}
               </h1>
               <p>{item.author}</p>
               </div>

               )
             }))}   
            </div>
        )
    }
}

export default AlgoliaForm
