import React from 'react';


export default class Clicker extends React.Component {
    handleClick() {

        if (this.props.type === 'increment') {
            this.props.incrementCounter(this.props.amount);
        }
        else {
            this.props.decrementCounter(this.props.amount);
        }
    }

    render() {

        return (
            <button onClick={ this.handleClick.bind(this) }>
                { this.props.type } by { this.props.amount }
            </button>
        );
    }
}
