import React, { Component, FlatList, View, Item } from "react";
import { Link } from "react-router-dom";
import { json } from "body-parser";
import { Table, Tab } from "semantic-ui-react";

// test id 7798339175

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      trackResponse: [],
      shipment: [],
      UpsPackage: [],
      activity: [],
      deliveryDate: [],
      upsId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  upsCall() {
    fetch(`/api/greeting?upsId=${encodeURIComponent(this.state.upsId)}`)
      .then((response) => response.json())
      .then((state) => {
        console.log(state) //  <----------TEST------------------   
        this.setState({
          info: state.info,
          trackResponse: state.trackResponse,
          shipment: state.shipment,
          UpsPackage: state.UpsPackage,
          activity: state.activity,
          deliveryDate: state.deliveryDate
        })
          console.log(this.state.info)  //    <----------TEST------------------ 
          });
  }

  handleChange(event) {
    this.setState({ upsId: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.upsCall()
  }
  
  
  render() {
    const myobj = this.state.info
    const { 
      info, 
      trackResponse, 
      shipment, 
      upsPackage, 
      activity, 
      deliveryDate 
    } = this.state

    let arr = [];
    Object.keys(info).forEach(function(key) {
      arr.push(info[key]);
    });



    return (
      <div className="App">
        <h1>Project Home</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="upsId">Enter your UPS tracking number: </label>
          <input
            id="upsId"
            type="text"
            value={this.state.upsId}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Info</Table.HeaderCell>
              <Table.HeaderCell>Track Response data</Table.HeaderCell>
              <Table.HeaderCell>Shipment data</Table.HeaderCell>
              <Table.HeaderCell>Package data</Table.HeaderCell>
              <Table.HeaderCell>Activity data</Table.HeaderCell>
              <Table.HeaderCell>Delivery Date data</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              {/* <Table.Cell>{info}</Table.Cell> */}
              {/* <Table.Cell>{trackResponse}</Table.Cell> */}
              
    <Table.Cell>{this.state.info}</Table.Cell>
    <Table.Cell>{Object.keys(myobj).map(obj=> obj)}</Table.Cell>
              {/* <Table.Cell>{upsPackage}</Table.Cell> */}
            </Table.Row>
          </Table.Body>
        </Table>
        {/* <div>{myobj}</div> */}
        {/* <p>{myobj}</p> */}
        {/* Link to List.js*/}
        {/* <Link to={"./list"}>
          <button variant="raised">My List</button>
        </Link> */}
      </div>
    );
  }
}
export default Home;