import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setApiUrl } from '../data/dataStore';

export class ApiUrlInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onChangeApiUrl: props.onChangeApiUrl
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.state.onChangeApiUrl(event.target.value);
    }

    render() {
        return (
            <p>
                <label>API URL:</label>
                <input onChange={this.handleChange} />
            </p>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiUrlInput);

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeApiUrl: apiUrl => dispatch(setApiUrl(apiUrl))
    }
}
