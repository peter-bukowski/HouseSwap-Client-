

import React from 'react'
import UserService from '../services/User.Service'




class SendMessage extends React.Component{

constructor(props){
    super(props)

    this.state={
        message:{
            id:-1,
            username:"",
            receiver:" ",
            message: " "
        }
    }
}

handleChange=(e)=>{
    e.preventDefault();
this.state.message[e.target.name]=e.target.value
}

handleSubmit=(e)=>{
e.preventDefault();
console.log(this.state.message.username);
console.log(this.state.message.receiver);
console.log(this.state.message.message);
const message=this.state.message
UserService.sendMessage(message)
}

render(){
    return(


  
  <form >
    <div class="form-control">
        <label for="username">Type your name</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="Enter your name" onChange={this.handleChange}></input>
    </div>
    <div class="form-group">
        <label for="receiver">Send to</label>
         <input type="text" class="form-control" id="receiver" name="receiver" placeholder="Send to" onChange={this.handleChange}></input>
    </div>
        <div class="form-group">
    <label for="Message">Message</label>
    <textarea type="text" class="form-control" id="message" name="message" rows="3" onChange={this.handleChange} ></textarea>
    
  </div>

   <button  class="button"  onClick={this.handleSubmit}>Submit</button>
  </form>




    )
}




}

export default SendMessage;