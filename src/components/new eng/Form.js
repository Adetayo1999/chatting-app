import React, { Component} from 'react'
import PersonIcon from '@material-ui/icons/Person'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import './Form.css'
 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"",
              email:"",
              password:""
         }
         this.inputRef = React.createRef()
         this.cbRef = null
         this.setCbRef = (element) => {
             this.cbRef = element
         }
     }
     
  getName = (e) => {
       this.setState({name:e.target.value})         
}
    
getEmail = (e) => {
    this.setState({email:e.target.value})         
}
    
getPassword = (e) => {
    this.setState({password:e.target.value})         
}

submitMe = (e) => {
    e.preventDefault()
}
componentDidMount(){
    // this.inputRef.current.focus()

    if(!this.cbRef){
        this.cbRef.focus()
    }else{
        this.inputRef.current.focus()
    }
     console.log(this.inputRef)
}

     
    render() {
        const {name , email ,password} = this.state
        return (
            <div className="form" onSubmit={this.submitMe}>
<form>
<div className="form-group">
<PersonIcon fontSize="large"/>
<input type="text" placeholder="Enter Your Name " onChange={this.getName} value={name} ref={this.inputRef}/>
</div>
<div className="form-group">
    <EmailOutlinedIcon fontSize="large"/>
<input type="email" placeholder="Enter Your Email Address " onChange={this.getEmail} value ={email} ref={this.setCbRef}/>
</div>
<div className="form-group">
    <LockOpenOutlinedIcon fontSize="large"/>
<input type="password" placeholder="Enter Your Password " onChange={this.getPassword} value={password}/>
</div> 
<input type="submit"/>
</form>

</div>
)
}
}

export default Form
