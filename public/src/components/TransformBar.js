/**
 * Created by afaren on 8/10/16.
 */
import React, {Component} from "react";
import InputBar from "./InputBar";
import ErrorMessageBar from "./ErrorMessageBar";
import ResultBar from "./ResultBar";

class TransformBar extends Component {


  render() {
    return (
      <div>
        <InputBar/>
        <ErrorMessageBar />
        <ResultBar/>

      </div>
    );
  }


}

export default TransformBar;
