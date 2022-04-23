import React, { Component } from "react";
import Counter from "./Counter";

export default class AppCount extends Component {
    state = {
        show: false,
        count: 0,
    };
    increment = () => {
        //state.count=count+1
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        this.state.count > 0 && this.setState({ count: this.state.count - 1 });
    };
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    render() {
        return (
            <div>
                <h1>Ws State</h1>
                <button onClick={this.handleShow}>
                    {this.state.show ? "Hide" : "Show"}
                </button>
                {this.state.show && (
                    <Counter
                        count={this.state.count}
                        increment={this.increment}
                        decrement={this.decrement}
                    />
                )}
            </div>
        );
    }
}
