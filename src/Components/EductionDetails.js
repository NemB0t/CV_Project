import React,{ Component } from "react";
import Btn from "./Btn";
import EduForm from "./EduForm";
import uniqid from 'uniqid';
import EduListElement from "./EduListElement";



class EducationDetails extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleDelEduList = this.handleDelEduList.bind(this);
        this.state={
            showForm:false,
            eduList:[],
            eduobj:{
                id:uniqid(),
                school:'',
                from:'',
                to:'',
                quali:'',
            }
        };
    }

    handleClick(){
        if(this.state.showForm){
            this.setState({
                showForm:false,
            });
        }
        else{
            this.setState({
                showForm:true,
            });
        }
        // console.log(this.state.showForm);
    }

    handleChange(e){
        // console.log(e);
        if(e.target.id === 'school'){
            this.setState({
                eduobj: {
                    id:this.state.eduobj.id,
                    school:e.target.value,
                    from:this.state.eduobj.from,
                    to:this.state.eduobj.to,
                    quali:this.state.eduobj.quali,
                }
            });
        }
        else if(e.target.id === 'from'){
            this.setState({
                eduobj: {
                    id:this.state.eduobj.id,
                    school:this.state.eduobj.school,
                    from:e.target.value,
                    to:this.state.eduobj.to,
                    quali:this.state.eduobj.quali,
                }
            });
        }
        else if(e.target.id === 'to'){
            this.setState({
                eduobj: {
                    id:this.state.eduobj.id,
                    school:this.state.eduobj.school,
                    from:this.state.eduobj.from,
                    to:e.target.value,
                    quali:this.state.eduobj.quali,
                }
            });
        }
        else if(e.target.id === 'qualification'){
            this.setState({
                eduobj: {
                    id:this.state.eduobj.id,
                    school:this.state.eduobj.school,
                    from:this.state.eduobj.from,
                    to:this.state.eduobj.quali,
                    quali:e.target.value,
                }
            });
        }

        // this.setState({
        //     eduobj: {
        //         id:this.state.eduobj.id,
        //         school:e.target.school.value,
        //         from:e.target.fromdate.value,
        //         to:e.target.todate.value,
        //         quali:e.target.quali.value,
        //     }
        // });
    }

    handleSubmit(e){
        // console.log(this.state.eduList);
        // console.log('submit');
        e.preventDefault();
        this.setState({
            eduList:this.state.eduList.concat(this.state.eduobj),
            eduobj:{
                id:uniqid(),
                school:'',
                from:'',
                to:'',
                quali:'',
            }
        });
        // console.log('before click:',this.state.showForm);
        this.handleClick();
        // console.log(this.state.eduList);
        // console.log('after click:',this.state.showForm);
    }

    handleDelEduList(id){
        this.setState({
            eduList: this.state.eduList.filter(item=>item.id!==id),
        });
    }

    render(){
        const {showForm} = this.state;
        return(
            <div>
                <h2>Education Details</h2>
                <EduListElement eduList = {this.state.eduList} onDelItem = {this.handleDelEduList}/>
                {showForm?
                <EduForm onChangeItem = {this.handleChange} onSubmitForm = {this.handleSubmit}/>:
                <Btn name = "Add" onBtnClick = {this.handleClick} dataId = ''/>}

                {/* <EduForm onChangeItem = {this.handleChange} onSubmitForm = {this.handleSubmit}/> */}
            </div>
        );
    }
}

export default EducationDetails;