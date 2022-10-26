import React , { Component } from "react";
import Btn from "./Btn";

class EduListElement extends Component{
    constructor(props){
        super(props);
        this.handleDeletedBtn = this.handleDeletedBtn.bind(this);
    }

    handleDeletedBtn(e){
        const delItemId = e.target.dataset.id;
        // console.log(e.target.dataset.id);
        this.props.onDelItem(delItemId);
    }

    render(){
        const {eduList} = this.props;
        return(
            <div>
                {eduList.map((item)=>{
                    return(
                        <div key={item.id}>
                            {/* <div></div> */}
                            <div>{item.school}</div>
                            <div>{item.from}</div>
                            <div>{item.to}</div>
                            <div>{item.quali}</div>
                            <Btn name = "Delete" onBtnClick = {this.handleDeletedBtn} dataId = {item.id}/>
                        </div>
                    );
                })}
                {/* {tasks.map((task) => {
                    count+=1;
                    return <li key={task.id}>{count+'. '+task.text}</li>;
                })} */}
            </div>
        );
    }
}

export default EduListElement;