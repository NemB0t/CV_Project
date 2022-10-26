import React,{ Component } from "react";
import Btn from "./Btn";


class BasicInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="text" placeholder={this.props.input}></input>
                <Btn name = "Save"/>
            </div>
        );
    }
}

export default BasicInput;