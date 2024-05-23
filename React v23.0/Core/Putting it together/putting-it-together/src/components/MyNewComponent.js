import React, { Component } from 'react';

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }
    birthdayButton = () => {
        this.setState(prevState => ({ age: prevState.age + 1 }));
    };
    render() {
        return (
            <div className="person-card">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthdayButton}>Birthday Button</button>
            </div>
        );
    }
}
export default PersonComponent;
