import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Data from "../../Apprentice_TandemFor400_Data.json";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      info: Data,
      display: [],
      num: this.getRanArr(20),
      score: 0,
      selected: "",
      showAnswer: "",
      status: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getRanArr(lngth) {
    // mix up our data by index into an array
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    return arr;
  }
  handleChange(event) {
    // chooses a random question by popping in the randomized data indexes from getRanArr() || state.info
    this.setState({
      display: this.state.info[this.state.num.pop()],
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.handleChange();
    // reset state after going to next question
    this.setState({ status: false, showAnswer: "" });
  }
  componentDidMount() {
    // get random array of 10 questions out of the 20; after component has mounted
    this.setState({ num: this.state.num.slice(0, 10) });
    this.handleChange();
  }
  async calculateAnswer(event) {
    // keep track of score
    await this.setState({ selected: event });
    if (this.state.selected === this.state.display.correct) {
      this.setState({ score: this.state.score + 1 });
    }
  }
  async displaySelected(element) {
    // display the correct answer after user has selected an answer
    await this.setState({
      showAnswer: "The answer is " + this.state.display.correct,
      status: true,
    });
  }
  render() {
    // test[] will hold all possible answers for a specific question and call the sort method to mix them up
    let test = [];
    test.push(this.state.display.incorrect);
    test.push(this.state.display.correct);
    // when all 10 questions have been answered a final score will appear with a reset button
    const refreshPage = () => {
      window.location.reload(false);
    };
    if (this.state.num.length === 0) {
      return (
        <div>
          <h1>Game Over</h1>
          <h2>You got {this.state.score} out of 10 questions correct</h2>
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={(event) => refreshPage(event)}
          >
            Play Again
          </Button>
        </div>
      );
    } else {
      // each question will appear and give an option to choose a single answer
      return (
        <div className="App">
          <h1>Tandem Trivia</h1>
          <Button
            variant={"contained"}
            color={"primary"}
            disabled={!this.state.status}
            onClick={(event) => this.handleSubmit(event)}
          >
            Next
          </Button>
          <div className="view">
            {/* Trivia Question string */}
            <h2>{this.state.display.question}</h2>
            <h3>{this.state.showAnswer}</h3>
            <div>
              {test
                .flat()
                .sort()
                .map((element) => {
                  return (
                    <Button
                      key={Math.floor(Math.random() * 1000000)}
                      style={{ margin: "1%" }}
                      variant={"contained"}
                      value={element}
                      color={"secondary"}
                      disabled={this.state.status}
                      onClick={() =>
                        this.calculateAnswer(element) && this.displaySelected()
                      }
                    >
                      {element}
                    </Button>
                  );
                })}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Home;
