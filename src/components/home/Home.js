import React, { Component, FlatList, View, Item } from "react";
import { Link } from "react-router-dom";
import { json } from "body-parser";
import { Table } from "semantic-ui-react";

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

  handleChange(event) {
    this.setState({ upsId: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?upsId=${encodeURIComponent(this.state.upsId)}`)
      .then(async (response) => response.json())
      .then((state) =>
        this.setState({
          info: state.info
          // trackResponse: state.trackResponse,
          // shipment: state.shipment,
          // UpsPackage: state.UpsPackage,
          // activity: state.activity,
          // deliveryDate: state.deliveryDate,
        })
      );
  }

  render() {
    const myobj = this.state.info
    // const { 
    //   info, 
    //   trackResponse, 
    //   shipment, 
    //   upsPackage, 
    //   activity, 
    //   deliveryDate 
    // } = this.state

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
              <Table.HeaderCell>TrackResponse data</Table.HeaderCell>
              <Table.HeaderCell>Shipment data</Table.HeaderCell>
              <Table.HeaderCell>Package data</Table.HeaderCell>
              <Table.HeaderCell>Activity data</Table.HeaderCell>
              <Table.HeaderCell>Delivery Date data</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {/* <Table.Row>
              <Table.Cell>{info}</Table.Cell>
              <Table.Cell>{trackResponse}</Table.Cell>
              <Table.Cell>{shipment}</Table.Cell>
              <Table.Cell>{upsPackage}</Table.Cell>
              <Table.Cell>{activity}</Table.Cell>
              <Table.Cell>{deliveryDate}</Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
        {/* <div>{myobj}</div> */}
        <p>{myobj}</p>
        {/* Link to List.js*/}
        <Link to={"./list"}>
          <button variant="raised">My List</button>
        </Link>
      </div>
    );
  }
}
export default Home;

// import React from 'react';

// export default class Home extends React.Component {
//     state = {
//         error: null,
//         upsID: 7798339175,
//         ups: [],
//         isLoaded: false,
//         AccessLicenseNumber: 'CD87EB29EA08CC32'
//     };

//     componentDidMount() {
//         // const proxyUrl = 'https://pacific-wave-05509.herokuapp.com/';
//         let targetUrl = 'https://wwwcie.ups.com/track/v1/details/1Z5338FF0107231059?locale=en_US';

//         fetch((targetUrl),{
//         method: 'GET',
//         header : {
//         'Access-Control-Allow-Origin': '*',
//         // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//         // 'Access-Control-Allow-Methods': 'GET',
//         // 'Access-Control-Allow-Origin': '*',
//         'TransId': '12345',
//         'TransactionSrc': 'TestTrack',
//         'Username': 'matthew_murphy1',
//         'Password': 'Kelsey-123',
//         'AccessLicenseNumber': '6D8811C98EB6B651',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',

//         }})
//             .then( async response => response.json())
//             .then(
//              (result) => {
//                 console.log(result)
//                 this.setState({ups: result.ups ,
//                 isLoaded: true,
//             });
//         },
//             (error) => {
//                 console.log(error)
//                 this.setState({
//                 isLoaded: true,
//                 error
//             });
//         }
//     )
// }

//     render() {
//         const { error, isLoaded, ups } = this.state;
//         if(error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//         return (
//         <div>
//             <h1>Let's track your package!</h1>
//             <p>Your info: {ups}</p>
//         </div>
//             );
//         }
//     }
// }
