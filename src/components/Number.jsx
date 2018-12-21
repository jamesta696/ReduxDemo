import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementNumber, decrementNumber } from "../actions/settingActions";

class Number extends Component {
    //onClick Action Fired
    onIncrement = e => {
        const { incrementNumber, num } = this.props;

        // state.num + 1
        incrementNumber(num);
    };

    onDecrement = e => {
        const { decrementNumber, num } = this.props;

        // state.num - 1
        decrementNumber(num);
    };

    render() {
        const { num } = this.props;
        //console.log("From the props -", this.props);
        return (
            <div style={{ textAlign: "center" }}>
                <div className="container">
                    <p className="lead">{num}</p>
                </div>
                <div className="container">
                    <button
                        className="btn btn-primary"
                        onClick={this.onIncrement}
                    >
                        Increment
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={this.onDecrement}
                        style={{ marginLeft: "6rem" }}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
}

// Getting Props from State on settingReducer.js
const mapStateToProps = state => {
    console.log(
        "mapStateToProps - Number Component (Reading initial data from state value) -",
        state,
        "\n",
        "──────────────────────────────────────────────────────────────────────"
    );
    return {
        num: state.num
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ incrementNumber, decrementNumber }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Number);
