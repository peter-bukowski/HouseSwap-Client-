import logo from './logo.svg';

import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './pages/login'
import ProfilePage from './pages/Profile'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'
import NotFound from './pages/NotFound'
import NotAuthorized from './pages/NotAuthorized'
import React from 'react';
import AuthGuard from './guards/AuthGuard'
import { Role } from './models/role';
import SellHome from './pages/SellHome'; 
import UserService from './services/User.Service';
import HomeListings from './pages/HomeListings';
import SendMessage from './pages/SendMessage';
import Offer from './pages/Offer';
class App extends React.Component{
   constructor(props) {
        super(props);

        this.state = {
            history: createBrowserHistory(),
            currentUser: null,
        };
    }
  

     componentDidMount() {
        UserService.currentUser.subscribe(data => {
            this.setState({
                currentUser: data,
            });
        });
    }

     logout() {
        UserService.logOut()
            .then(
                data => {
                    this.state.history.push('/login');
                },
                error => {
                    this.setState({
                        errorMessage: 'Unexpected error occurred.',
                    });
                },
            );
    }

    render(){
       const {  currentUser,history } = this.state;
       return(
         <Router history={history}>
           <div>
                    {currentUser &&
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="/home">
                            <img src={logo} className="App-logo" alt="logo"/>
                            React
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">
                                    <span className="fa fa-home"/>
                                    Home
                                </a>
                            </li>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">
                                    <span className="fa fa-user"/>
                                    {currentUser.name}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => this.logout()}>
                                    <span className="fa fa-sign-out"/>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    </nav>
                    }
                </div>

                 <div>
                    {!currentUser &&
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="/home">
                            <img src={logo} className="App-logo" alt="logo"/>
                            React
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">
                                    <span className="fa fa-home"/>
                                    Home
                                </a>
                            </li>
                        </div>
                        
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    <span className="fa fa-user-plus"/>
                                    &nbsp;
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    <span className="fa fa-sign-in"/>
                                    Login
                                </a>
                            </li>
                        </div>
                    </nav>
                    }
                </div>
          
          
          
          
          
          
          
          
          
          <div className="container">
            <Switch>
             <Route exact path="/" component={HomePage}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={RegisterPage}/>
              <Route exact path="/profile" component={ProfilePage}/>
              <Route exact path="/home" component={HomePage}/>
              <Route exact path="/404" component={NotFound}/>
              <Route exact path="/401" component={NotAuthorized}/>
              <Route exact path='/sellhome' component={SellHome}></Route>
              <Route exact path='/homelistings' component={HomeListings}></Route>
              <Route exact path='/sendmessage' component={SendMessage}></Route>
              <Route  exact path='/offer' component={Offer}></Route>
            </Switch>
                  
           </div>

         </Router>
       )
    }
}

export default App;
