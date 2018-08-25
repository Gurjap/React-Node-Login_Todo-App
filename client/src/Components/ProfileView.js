import React,{Component} from "react";

export default class ProfileView extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>Profile View</h1>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                               <ul>
                                   <li>Email: sjapguejpa</li>
                                   <li>FullName: sjapguejpa</li>
                                   <li>Lastname: sjapguejpa</li>
                                   <li>PetName: sjapguejpa</li>
                                   <li>University: sjapguejpa</li>
                               </ul>

                            <div className="form-check">
                                <button type="submit" className="btn btn-primary m-2">Edit</button>
                                <button type="submit" className="btn btn-primary">Logout</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}