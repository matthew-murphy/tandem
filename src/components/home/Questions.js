import React, { Component, FlatList, View, Item } from "react";
import * as data from "../../Apprentice_TandemFor400_Data.json";
import { Button, makeStyles } from "@material-ui/core";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerArr: [],
      score: 0,
      selected: "",
      check: ""
    };
  }
  async calculateAnswer(event) {
    await this.setState({ selected: event });
    console.log(event)
    console.log(this.state.correctAnswer)
    if (this.state.selected == this.props.correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
    console.log(this.state.selected);
    console.log(this.state.score);
  }
  render() {
    console.log(this.props.wrongAnswers);
    console.log(this.props.correctAnswer);
    let test = []
    test.push(this.props.wrongAnswers);
    test.push(this.props.correctAnswer);
    test.flat();
    test.sort();
    console.log(test);
    return (
      <div className="view">
        {/* Trivia Question string */}
        <h2>{this.props.title}</h2>

        <div>
          {test.flat().sort().map((element) => {
              return (
                <Button
                  key={Math.floor(Math.random() * 1000000)}
                  style={{ margin: "1%" }}
                  variant={"contained"}
                  value={element}
                  color={"secondary"}
                  onClick={() => this.calculateAnswer(element)}
                >
                  {element}
                </Button>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Questions;
