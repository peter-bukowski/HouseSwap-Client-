import React from 'react';
import '../CSS/LoginPage.css'
import UserService from '../services/User.Service';
import {User} from "../models/user"
import '../CSS/LoginPage.css'
class LoginPage extends React.Component {

    constructor(props) {
        super(props);



         
        if (UserService.currentUserValue) {
            this.props.history.push('/profile');
        }

        this.state = {
            user: new User('', ''),
            submitted: false,
            loading: false,
            errorMessage: '',
        };
    }

     handleChange(e) {
         console.log(e.target.value)
        const { name, value } = e.target;
        const { user } = this.state;
        user[name] = value;
        this.setState({ user: user });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;

        
        if (!user.username || !user.password) {
            return;
        }

        this.setState({ loading: true });
        UserService.login(user)
            .then(
                data => {
                    this.props.history.push('/profile');
                },
                error => {
                    console.log(error);
                    this.setState({
                        errorMessage: 'username or password is not valid.',
                        loading: false,
                    });
                },
            );
    }
       
render(){
    const { user, submitted, loading, errorMessage } = this.state;
   return (
            <div className="login-page">
                <div className="card">
                    <div className="header-container">
                        <i className="fa fa-user"/>
                    </div>

                    {errorMessage &&
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                    }

                    <form
                        name="form"
                        onSubmit={(e) => this.handleLogin(e)}
                        noValidate
                        className={submitted ? 'was-validated' : ''}>
                        <div className={'form-group'}>
                            <label htmlFor="username">Username: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Username"
                                required
                                value={user.username}
                                onChange={(e) => this.handleChange(e)}/>
                            <div className="invalid-feedback">
                                A valid username is required.
                            </div>
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="Password">Password: </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required
                                value={user.password}
                                onChange={(e) => this.handleChange(e)}/>
                            <div className="invalid-feedback">
                                Password is required.
                            </div>
                        </div>

                        <button
                            className="btn btn-primary btn-block"
                            onClick={() => this.setState({ submitted: true })}
                            disabled={loading}>
                            Login
                        </button>
                    </form>
                    <a href="/register" className="card-link">Create New Account!</a>
                </div>
            </div>
        );
}


        
}


export default LoginPage;