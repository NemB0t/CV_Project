import React, { Component } from "react";
import BasicDetails from "./BasicDetails";


class BasicDetailsBox extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     isSave: false,
        // };
    }
    render(){
        return(
            
            <div>
                <BasicDetails fname = "First Name" isSave={this.props.isSave} />
                <BasicDetails fname = "Last Name" isSave={this.props.isSave} />
                <BasicDetails fname = "Email" isSave={this.props.isSave} />
                <BasicDetails fname = "Phone Number" isSave={this.props.isSave} />
            </div>
        );
    }
}

export default BasicDetailsBox