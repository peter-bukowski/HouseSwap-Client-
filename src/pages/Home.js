import React from 'react'



class Home extends React.Component{

constructor(props){

super(props)
}
render(){
    return(
        
        <nav class="navbar navbar-light bg-light">
              <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <a href="/homelistings" class="button">Search for Homes</a>
  
                 </form>
              </nav>
        
    )
}
}

export default Home