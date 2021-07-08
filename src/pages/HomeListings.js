


import React from 'react'
import UserService from '../services/User.Service'


class HomeListings extends React.Component{

constructor(props){
super(props)

this.state={
     homeDetails:[]
}
}

componentDidMount(){
UserService.getAllListings().then(data=>
    this.setState({homeDetails:data.data})
    
    )
}

render(){
 const{homeDetails}=this.state
 homeDetails.forEach((elem)=>{
     console.log(elem)
 })
    return(
        homeDetails.map((home)=>{
            return(
  <>
<div class="container-sm">
    <img src="https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2018/06/1140-house-inheriting.imgcache.rev106cf2f6504ef6ad2461c387ebeff033.jpg" class="img-fluid" width="600" height="40" alt="..."></img>
    <table class="table" width="200" height="40">

    <tr>
      
      <th width="200" scope="col">Address:{home.streetAddress} </th>
      <th width="200" scope="col">Bathroom Count:{home.bathroomCount}  Bedroom Count:{home.bedroomCount}</th>
      <th scope="col">Price: {home.price}</th>
      <a href="/sendmessage" class="button"> Message Seller</a>
      
    </tr>
    </table>
</div>
  </>
            );
})

    );
}


}


export default HomeListings