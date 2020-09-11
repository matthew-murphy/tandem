import React from 'react';



export default class Home extends React.Component {
    state = {
        error: null,
        upsID: 7798339175,
        ups: [],
        isLoaded: false,
        AccessLicenseNumber: 'CD87EB29EA08CC32'
    };


    componentDidMount() {
        const proxyUrl = 'https://pacific-wave-05509.herokuapp.com/';
        let targetUrl = 'https://wwwcie.ups.com/track/v1/details/1Z5338FF0107231059?locale=en_US';

        fetch((proxyUrl + targetUrl),{
        method: 'GET',
        header : {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Methods': 'GET',
        // 'Access-Control-Allow-Origin': '*',
        'TransId': '12345',
        'TransactionSrc': 'TestTrack',
        'Username': 'matthew_murphy1',
        'Password': 'Kelsey-123',
        'AccessLicenseNumber': '6D8811C98EB6B651',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         
        }})
            .then( async response => response.json()) 
            .then(
             (result) => {
                console.log(result)
                this.setState({ups: result.ups ,
                isLoaded: true,
            });
        },
            (error) => {
                console.log(error)
                this.setState({
                isLoaded: true,
                error
            });
        }
    )
}


    render() {
        const { error, isLoaded, ups } = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
        <div>
            <h1>Let's track your package!</h1>
            <p>Your info: {ups}</p>
        </div>
            );
        }
    }
}