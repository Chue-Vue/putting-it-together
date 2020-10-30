import React, { Component } from 'react';

export default class PersonCard extends Component {

    constructor(props){
        super(props);
        this.state ={
            age : this.props.person.age
        }
    }
    render(){
        return (
            <div>
                <h1>{this.props.person.firstName} {this.props.person.lastName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.person.hairColor}</p>
                <button onClick={() => this.setState({age: this.state.age +1})}>
                    CLICK ME TO MAKE ME OLDER!
                </button>
            </div>
        )
    }
}

// export default PersonCard;