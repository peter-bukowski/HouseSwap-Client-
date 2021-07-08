

import React from 'react'
import UserService from '../services/User.Service'



class Offer extends React.Component{

constructor(props){
    super(props)

    this.state={
        offer:{
            id:-1,
            username:"",
            address:" ",
            offerPrice: ""
        }
    }
}


handleChange=(e)=>{
e.preventDefault();
this.state.offer[e.target.name]=e.target.value;
}

handleSubmit=(e)=>{

e.preventDefault();
const offer=this.state.offer
UserService.sendOffer(offer)


}

render(){

return(
 <form >
    <div class="form-control">
        <label for="username">Type your name</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="Enter username" onChange={this.handleChange}></input>
    </div>
    <div class="form-group">
        <label for="receiver">Property Location</label>
         <input type="text" class="form-control" id="address" name="address" placeholder="Enter Address" onChange={this.handleChange}></input>
    </div>
        <div class="form-group">
    <label for="Offer">Offer for Home</label>
    <input type="text" class="form-control" id="offerPrice" name="offerPrice" rows="3" onChange={this.handleChange} ></input>
    
  </div>

   <button  class="button"  onClick={this.handleSubmit}>Submit</button>
  </form>




)



}





}

export default Offer