import React, {Component} from "react";
import Header from  "./Header";
import TransformBar from "./TransformBar";
import  HistoryTable from "./HistoryTable";

class App extends Component {


  render() {
    return (
      <div>
        <Header/>
        <TransformBar/>
        <HistoryTable/>
      </div>

    );

  }


}

export default App;
