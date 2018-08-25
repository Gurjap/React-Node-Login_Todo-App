import {Component} from "react";
import {sign_up} from "../hooks/ListFunctions"
import React from "react";

export default class Signup extends React.Component{
    constructor(){
        super();
        this.onSignUp.bind(this);
    }

    ComponentDidMount(){

    }
    ComponentWillMount() {

    }
    onSignUp=(e)=>{
        e.preventDefault();
        const user={};
        if(e.target.email.value!==undefined && e.target.email.value!==""){
            user.email=e.target.email.value;
        }
        if(e.target.firstname.value!==undefined && e.target.firstname.value!==""){
            user.firstname=e.target.firstname.value;
        }
        if(e.target.lastname.value!==undefined && e.target.lastname.value!==""){
            user.lastname=e.target.lastname.value;
        }
        if(e.target.password.value!==undefined && e.target.password.value!==""){
            user.password=e.target.password.value;
        }
        console.log(user);
        sign_up(user).then(data=>{
            console.log(data);
            if(data.sucess===true){

            }
        })


    };
    render(){
        return(
            <div className="container">
                <div className="row">

                    <h1>Sign up</h1>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form onSubmit={this.onSignUp.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFullname">Full Name</label>
                                <input type="text" name="firstname" className="form-control" id="exampleInputFullname"
                                       aria-describedby="emailHelp" placeholder="Enter full name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLastname">Last Name</label>
                                <input name="lastname" type="lastname" className="form-control" id="exampleInputLastname"
                                       aria-describedby="emailHelp" placeholder="Enter last name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-check">
                                <button className="btn btn-info m-4" type="button"
                                        value="Login">Login
                                </button>
                                <button type="submit" className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}