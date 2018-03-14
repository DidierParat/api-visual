import React, { Component } from 'react';
import { prettyPrintJson, queryApi } from '../utils';
import { connect } from 'react-redux';
import { getStore } from '../data/dataStore';

export class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        queryApi(this.props.apiUrl + "/customers/123")
            .then(data => this.setState({data: data}))
            .catch(e => console.error(e));
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <p>GET request: /customers/(customerID)</p>
                <p>Get customer details by ID.</p>
                <button onClick={this.handleClick}>Try !</button>
                {prettyPrintJson(this.state.data)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Customers);

function mapStateToProps(state) {
    return {
        apiUrl: state.apiUrl
    };
}