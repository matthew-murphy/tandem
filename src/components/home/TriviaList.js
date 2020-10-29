import React, { Component } from "react";
import Questions from "./Questions";


class TriviaList extends Component {
    render() {
      return (
        <section className="main">
          <ul>
              <Questions
                title={(this.props.list.question)}
                correctAnswer={(this.props.list.correct)}
                wrongAnswers={(this.props.listArr)}
              />
          </ul>
        </section>
      ); 
    } 
  }
  export default TriviaList;