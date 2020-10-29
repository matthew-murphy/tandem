import React, { Component, FlatList, View, Item } from "react";
import * as data from "../../Apprentice_TandemFor400_Data.json";
import { Button } from "@material-ui/core"


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          answerArr: [],
          score: 0,
          selected: ""
        };
      };
    calculateAnswer(event) {
        this.setState({selected: event.target.value.toString()})
        if (this.state.selected === this.props.correctAnswer){
            this.setState({score: this.state.score + 1})
        }
        console.log(this.state.selected)
        console.log(this.state.score)
    };
    componentDidMount() {
        // let one = this.props.wrongAnswers;
        // this.one = this.one.push(this.props.correctAnswer);
        // this.setState({ answerArr: one});
        console.log(this.props.correctAnswer);
        console.log(this.props.wrongAnswers)

    };

  render() {
    // const loadup = (x, y) => {
    //     // this.props.wrongAnswers;
    //     let one = x.push(y);
    //     this.setState({ answerArr: x.push(y)});
    //     if (this.state.answerArr !== NaN){
    //         this.state.answerArr.map(
    //         (str) => {
    //         return <Button color={'primary'} onClick={(e) => this.calculateAnswer(e)}>{str}</Button>
    //         })
    //     } else {
    //         return ""
    //     }
    // }
    console.log(this.props.wrongAnswers);
    console.log(this.props.correctAnswer);
    let test = []
    test.push(this.props.wrongAnswers);
    test.push(this.props.correctAnswer)
    test.flat()
    test.sort()
    console.log(test)
    return (
      <div className="view">
          {/* Trivia Question string */}
        <h3>{this.props.title}</h3>

        <div>
            {test.flat().sort().map(element => {
                return(
                    <button value={String(element)} color={"secondary"} onClick={(e) => this.calculateAnswer(e)}>{element}</button>
                )
            })}
            {/* {loadup(this.props.wrongAnswers, this.props.correctAnswer)} */}
        </div>

      </div>
    );
  }
}
export default Questions;
