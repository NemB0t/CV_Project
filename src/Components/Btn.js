import React , { Component } from "react";

class Btn extends Component{
    constructor(props){
        super(props);
        this.handleBtnClick=this.handleBtnClick.bind(this);
    }
    handleBtnClick(e){
        this.props.onBtnClick(e);
    }
    render(){
        return(
            <button onClick={this.handleBtnClick} data-id = {this.props.dataId} >{this.props.name}</button>
        );
    }
}

export default Btn;