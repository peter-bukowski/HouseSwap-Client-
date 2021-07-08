
import React from 'react';

import UserService from '../services/User.Service';



class SellHome extends React.Component{

constructor(props){
    super(props)

this.state={
    home:{
        
        id:3,
        streetAddress: " ",
        bedroomCount:-1,
        bathroomCount: -1,
        price: ""


    }
}
  
}

 handleChange=(e)=>{
     
this.state.home[e.target.name]=e.target.value
}

handleSubmit=(e)=>{
    e.preventDefault();
    
    console.log(this.state.home.streetAddress)
    console.log(this.state.home.bathroomCount)
    console.log(this.state.home.bedroomCount)
    
    const homeDetails=this.state.home
    UserService.uploadListing(homeDetails)
}



render(){
    const{home}=this.state;
    return(
    <form>
 <div class="form-group">

      <label for="streetAddress">Enter Home Details</label>
    <input 
    type="text" 
    class="form-control" 
    id="streetAddress"
    name="streetAddress"
    onChange={this.handleChange}
    placeholder="Enter Street Address">

    </input>
 </div>
 <div class="form-group">
    <input 
    type="text" 
    class="form-control" 
    id="bedroomCount"
    name="bedroomCount"
    onChange={this.handleChange}
    placeholder="Enter Bedroom count">
</input>
 </div>

  <div class="form-group">
    <input 
    type="text" 
    class="form-control" 
    id="bathroomCount"
    name="bathroomCount"
    onChange={this.handleChange}
    placeholder="Enter Bathroom count">
</input>
 </div>

  <div class="form-group">
    <input 
    type="text" 
    class="form-control" 
    id="price"
    name="price"
    onChange={this.handleChange}
    placeholder="Enter price">
</input>
 </div>

 <button type="submit" class="button" onClick={this.handleSubmit}>submit</button>
</form>




    );

}




}

export default SellHome