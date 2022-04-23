// import React, { Component } from "react";

// export default class Counter extends Component {
//     state = {
//         count: 0,
//         name: "",
//         show: false,
//     };
//     increment = () => {
//         //state.count=count+1
//         this.setState({ count: this.state.count + 1 });
//     };
//     decrement = () => {
//         this.state.count > 0 && this.setState({ count: this.state.count - 1 });
//     };
//     handleShow = () => {
//         this.setState({ show: !this.state.show });
//     };
//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}>Increment</button>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.decrement}>Decrement</button>
//                 //Ken show true kharajli hello else matkhrej shay
//                 <button onClick={this.handleShow}>
//                     {this.state.show ? "Hide" : "Show"}
//                 </button>
//                 {this.state.show && <h1>Hello</h1>}
//             </div>
//         );
//     }
// }

import React from "react";

function Counter({ count, increment, decrement }) {
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h1>Count: {count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
