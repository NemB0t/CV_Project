import React , { Component } from "react";
import Btn from "./Btn";


class PracticalListElement extends Component{
    constructor(props){
        super(props);
        this.handleDeletedBtn = this.handleDeletedBtn.bind(this);
    }

    handleDeletedBtn(e){
        const delItemId = e.target.dataset.id;
        this.props.onDelItem(delItemId);
    }

    render(){
        const {expList} = this.props;
        return(
            <div>
                {expList.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div>{item.companyName}</div>
                            <div>{item.title}</div>
                            <div>{item.task}</div>
                            <div>{item.yoe}</div>
                            <Btn name = "Delete" onBtnClick = {this.handleDeletedBtn} dataId = {item.id}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default PracticalListElement;