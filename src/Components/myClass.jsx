import React, { Component } from "react";
import Button from "./Button";

class MyClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            val1: 3,
            val2: 2,
        };
    }

    increment(e) {
        e.preventDefault();
        this.setState((state) => {
            return { count: state.count + this.state.val1 };
        });
    }

    decrement(e) {
        e.preventDefault();
        this.setState((state) => {
            return { count: state.count - this.state.val2 };
        });
    }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <Button
                    val={this.state.val1}
                    onClick={(e) => this.increment(e)}
                >
                    +
                </Button>
                <Button
                    val={this.state.val2}
                    onClick={(e) => this.decrement(e)}
                >
                    -
                </Button>
            </>
        );
    }
}

export default MyClass;
