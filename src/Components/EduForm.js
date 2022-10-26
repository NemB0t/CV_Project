import React, {Component} from "react";

class EduForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(e.target.quali.value.length && e.target.school.value.length && e.target.from.value.length && e.target.to.value.length){
            // console.log(e.target.quali);
            this.props.onSubmitForm(e);
        }
        // console.log(e.target.quali.value.length);
        // this.props.onSubmitForm(e);
    }

    handleChange(e){
        e.preventDefault();
        // console.log(e.target.id);
        // console.log(e.target.value);
        this.props.onChangeItem(e);
    }

    render(){
        return(
            <div>
                <form id= "Edu-Data" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label htmlFor="school" >School</label>
                    <input id="school" type="text" name="school"></input>
                    <br/>
                    <label htmlFor="from">From</label>
                    <input id="from" type="date" name="fromdate"></input>
                    <br/>
                    <label htmlFor="to">To</label>
                    <input id="to" type="date" name="todate"></input>
                    <br/>
                    <label htmlFor="qualification">Qualification</label>
                    <input id="qualification" type="text" name="quali"></input>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default EduForm;