import React, { Component } from "react";

class Person extends Component {
    state = {
        timer: 0,
        interval: null
    };

    componentDidMount() {
        this.setState(
            {
                interval: setInterval(() => {
                    this.setState({ timer: this.state.timer + 1 })
                }, 1000)
            }
        )
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }


    render() {

        return (
            <div>
                <center>
                    <h1>Hassna Dachraoui</h1>
                    <h2>Beauty Is Not In Face  <br></br>
                        Beauty Is A Light In The Heart
                    </h2>
                    <h3>Web Developer</h3>
                    {this.state.timer}
                </center>
            </div>
        )
    }
};

export default Person;