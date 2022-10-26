import React , { Component } from "react";

class PracticalForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        if(e.target.companyName.value.length && e.target.title.value.length && e.target.task.value.length && e.target.yoe.value.length){
            this.props.onSubmitForm(e);
        }
    }
    handleChange(e){
        e.preventDefault();
        this.props.onChangeItem(e);
    }
    render(){
        return(
            <form id= "Exp-Data" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <label htmlFor="companyName" >CompanyName</label>
                <input id="companyName" type="text" name="companyName"></input>
                <br/>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title"></input>
                <br/>
                <label htmlFor="task">Task</label>
                <input id="task" type="text" name="task"></input>
                <br/>
                <label htmlFor="yoe">Years of Experience</label>
                <input id="yoe" type="text" name="yoe"></input>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default PracticalForm;