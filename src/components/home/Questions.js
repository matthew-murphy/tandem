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
    };
  }
  calculateAnswer(event) {
    this.setState({ selected: event.target.value.toString() });
    if (this.state.selected === this.props.correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
    console.log(this.state.selected);
    console.log(this.state.score);
  }
  render() {
    console.log(this.props.wrongAnswers);
    console.log(this.props.correctAnswer);
    let test = [];
    test.push(this.props.wrongAnswers);
    test.push(this.props.correctAnswer);
    test.flat();
    test.sort();
    console.log(test);
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       "& > *": {
    //         margin: theme.spacing(1),
    //       },
    //     },
    //   }));
    // const classes = useStyles();
    return (
      <div className="view">
        {/* Trivia Question string */}
        <h2>{this.props.title}</h2>

        <div>
          {test
            .flat()
            .sort()
            .map((element) => {
              return (
                <Button
                style={{margin: "1%"}}
                  variant={"contained"}
                  value={String(element)}
                  color={"secondary"}
                  onClick={(e) => this.calculateAnswer(e)}
                >
                  {element}
                </Button>
              );
            })}
          {/* {loadup(this.props.wrongAnswers, this.props.correctAnswer)} */}
        </div>
      </div>
    );
  }
}
export default Questions;
