import React, { Component } from "react";
import BasicDisplay from "./BasicDisplay";
import BasicInput from "./BasicInput";



class BasicDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const {isSave} = this.props;        
        if(isSave){
            return <BasicInput input = {this.props.fname}/>
        }
        return <BasicDisplay fname = {this.props.fname}/>
    }
}

export default BasicDetails;