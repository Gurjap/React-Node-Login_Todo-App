import React, {Component} from "react";

const LOGIN_API = 'http://localhost:8080/api/signup';

function JustSignedIn (props) {
    if (props.signedUp) {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Signed up!</strong> You have successfully signed up.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
    return <div/>;
}
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'df',
            password: 'fd'
        };
        this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

    }
    render() {
        return (
            <div className="container">
                <JustSignedIn signedUp={false}/>
                <h1>Login</h1>
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password"
                                       id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-check">
                                <button className="btn btn-info m-4" type="button"
                                        value="Sign up">Sign up
                                </button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}