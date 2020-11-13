import React, {Component} from 'react'
import './form.css'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
class Form extends Component {
    constructor(){
         super();
         this.state = { name:null
         }
         this.changeState= this.changeState.bind(this);
         this.showWelcome= this.showWelcome.bind(this)
    }
    changeState(e){
        this.setState({name:e.target.value})
    }
 showWelcome(e){
        e.preventDefault()
         const Welcome = document.querySelector('.welcome-msg')
         Welcome.style.display="flex"
 }
    render(){
        const {name} = this.state
        return (
            <div className="form">
                <form onSubmit={this.showWelcome} >
                    <div className="input-text">
                    <input type="text" placeholder="Tell Us Your Name" onChange={this.changeState}/>
                    <AccountCircleOutlinedIcon className="icon" fontSize="large" />
                    </div>
                    <input type="submit"/>
                </form>
            {  name &&  ( <div className="welcome-msg">
        <h1>Hello {name.toUpperCase()}</h1>
        <p>Hello {name.toUpperCase()} Its Good To Have You Here</p>
                </div> )
                }
            </div>
        )

    }
}

export default Form
