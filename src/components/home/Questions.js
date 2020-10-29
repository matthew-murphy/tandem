import React, { Component, FlatList, View, Item } from "react";
import * as data from "../../Apprentice_TandemFor400_Data.json";

class Questions extends Component {
  render() {
    console.log(this.props.wrongAnswers);
    return (
      <div className="view">
        <h3>{this.props.title}</h3>
        <p>{this.props.correctAnswer}</p>
        {/* {(this.props.wrongAnswers.map(item => {
            return <p>{item}</p>
        }))} */}
        <p>{this.props.wrongAnswers}</p>
      </div>
    );
  }
}
export default Questions;
