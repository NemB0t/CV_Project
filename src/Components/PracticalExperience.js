import React , {Component} from "react";
import Btn from "./Btn";
import uniqid from 'uniqid';
import PracticalForm from "./PracticalForm";
import PracticalListElement from "./PracticalListElement";

class PracticalExperience extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleDelEduList = this.handleDelEduList.bind(this);

        this.state={
            showForm:false,
            expList:[],
            expobj:{
                id:uniqid(),
                companyName:'',
                title:'',
                task:'',
                yoe:'',
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
    }

    handleChange(e){
        // console.log(e);
        if(e.target.id === 'companyName'){
            this.setState({
                expobj: {
                    id:this.state.expobj.id,
                    companyName:e.target.value,
                    title:this.state.expobj.title,
                    task:this.state.expobj.task,
                    yoe:this.state.expobj.yoe,
                }
            });
        }
        else if(e.target.id === 'title'){
            this.setState({
                expobj: {
                    id:this.state.expobj.id,
                    companyName:this.state.expobj.companyName,
                    title:e.target.value,
                    task:this.state.expobj.task,
                    yoe:this.state.expobj.yoe,
                }
            });
        }
        else if(e.target.id === 'task'){
            this.setState({
                expobj: {
                    id:this.state.expobj.id,
                    companyName:this.state.expobj.companyName,
                    title:this.state.expobj.title,
                    task:e.target.value,
                    yoe:this.state.expobj.yoe,
                }
            });
        }
        else if(e.target.id === 'yoe'){
            this.setState({
                expobj: {
                    id:this.state.expobj.id,
                    companyName:this.state.expobj.companyName,
                    title:this.state.expobj.title,
                    task:this.state.expobj.task,
                    yoe:e.target.value,
                }
            });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            expList:this.state.expList.concat(this.state.expobj),
            expobj:{
                id:uniqid(),
                companyName:'',
                title:'',
                task:'',
                yoe:'',
            }
        });
        this.handleClick();
    }

    handleDelEduList(id){
        this.setState({
            expList: this.state.expList.filter(item=>item.id!==id),
        });
    }

    render(){
        const {showForm} = this.state;
        return(
            <div>
                <h2>Practical Experience</h2>
                
                <PracticalListElement expList = {this.state.expList} onDelItem = {this.handleDelEduList}/>
                {showForm?
                <PracticalForm onChangeItem = {this.handleChange} onSubmitForm = {this.handleSubmit}/>:
                <Btn name = "Add" onBtnClick = {this.handleClick} dataId = ''/>}

            </div>
        );
    }
}

export default PracticalExperience;