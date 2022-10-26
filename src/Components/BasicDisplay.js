import React,{ Component } from "react";
import Btn from "./Btn";

class BasicDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <text>{this.props.fname}</text>
                <Btn name = "Edit"/>
            </div>
        );
    }
}

export default BasicDisplay;