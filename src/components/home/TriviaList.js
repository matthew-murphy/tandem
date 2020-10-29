import React, { Component } from "react";
import Questions from "./Questions";


class TriviaList extends Component {
    render() {
      return (
        <section className="main">
              <Questions
                title={this.props.list.question}
                correctAnswer={this.props.correct}
                wrongAnswers={this.props.incorrect}
              />
        </section>
      ); 
    } 
  }
  export default TriviaList;