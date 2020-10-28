import React, { Component, FlatList, View, Item } from "react";
import { Table, Tab, Button, Form } from "semantic-ui-react";
import Data from '../../Apprentice_TandemFor400_Data.json';
import TriviaList from "./TriviaList";

// test id 7798339175

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      info: Data,
      questNum: Data.length,
      quest: [], 
      display: [],
      num: this.getRanArr(20)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getRanArr(lngth) {
    let arr = [];
    do {
        let ran = Math.floor(Math.random() * lngth); 
        arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
     } while (arr.length < lngth)
     
     return arr;
  }
  handleChange(event) {
    let start = this.state.num
    this.setState({ 
      display: this.state.info[this.state.num.pop()]
    });
    console.log(this.state.num)
  }
  handleSubmit(event) {
    event.preventDefault();
    this.handleChange()
    this.setState({questNum: this.state.questNum++})
    console.log(this.state.info)
    console.log(this.state.quest)
  }
  componentDidMount() {
    this.setState({num: this.state.num.slice(0, 10)})
    this.handleChange()
  }
  
  render() {
    // const myobj = this.state.info
    const { info } = this.state;
    if (this.state.num.length === 0){
      return <h1>Game Over</h1>
    } else {
    return (
      <div className="App">
        <h1>Tandem Trivia</h1>
          <Button secondary onClick={(event) => this.handleSubmit(event)}>Submit</Button>
        <div>
          <TriviaList 
          list={this.state.display}
          listQuestion={this.state.display.question}
          listArr={this.state.display.incorrect}
          listCorrect={this.state.display.correct}
          />
        </div>
      </div>
    );
  }}
}
export default Home;
