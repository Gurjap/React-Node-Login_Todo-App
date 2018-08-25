import React,{Component} from "react";

export default class ProfileEdit extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>Profile Edit</h1>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputFullname">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputFullname"
                                       aria-describedby="emailHelp" placeholder="Enter full name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLastname">Last Name</label>
                                <input type="email" className="form-control" id="exampleInputLastname"
                                       aria-describedby="emailHelp" placeholder="Enter last name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPetname">Pet Name</label>
                                <input type="password" className="form-control" name="pet name" id="exampleInputPetname"
                                       placeholder="Pet Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputSchoolname">School Name</label>
                                <input type="password" className="form-control" name="password" id="exampleInputSchoolname"
                                       placeholder="School Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUniversity">University name</label>
                                <input type="password" className="form-control" name="password" id="exampleInputUniversity"
                                       placeholder="University name"/>
                            </div>

                            <div className="form-check">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}