// App.js

import React, { Component } from "react";
import BasicDetailsBox from "./Components/BasicDetailsBox";
import Btn from "./Components/Btn";
import EducationDetails from "./Components/EductionDetails";
import PracticalExperience from "./Components/PracticalExperience";



class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
            isSave: false,
        };
  }
  // onClickBtn(){
  //   if(this.state.isSave){
  //       this.setState({
  //           isSave:false,
  //       });
  //   }
  //   else{
  //       this.setState({
  //           isSave:true,
  //       });
  //   }
  // }
  render() {
    // const { task, tasks } = this.state;
    

    return (
      <div>
        <h1>CV Generator</h1>
        <Btn name = "Preview"/>
        <BasicDetailsBox isSave = {this.state.isSave}/>        
        <EducationDetails isSave = {this.state.isSave}/>
        <PracticalExperience isSave = {this.state.isSave}/>
      </div>
    );
  }
}

export default App;