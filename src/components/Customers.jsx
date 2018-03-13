import React, { Component } from 'react';
import { get } from 'axios';

export class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {},
        };
    }

    fetchCustomer() {
        get("https://1l3m2p0.restletmocks.net/customers/123")
            .then(response => this.setState({data: response.data}))
            .catch(error => xhrError(error));
    }

    xhrError(error) {
        console.error("Error: unable to fetch data from the API.");
        console.error(error);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.fetchCustomer()}>Try API !</button>
                <div><pre>{JSON.stringify(this.state.data, null, 2) }</pre></div>
            </div>
        );
    }
}

export default Customers;