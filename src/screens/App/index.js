import React from 'react';
import { IndexLink, Link } from 'react-router';


const internals = {};


internals.activeStyle = {
    color: 'grey',
    textDecoration: 'none',
    cursor: 'default',
    pointerEvents: 'none'
};


export default class App extends React.Component {
    render() {

        return (
            <div>
                <nav><IndexLink to="/" activeStyle={ internals.activeStyle }>Home</IndexLink> | <Link to="about" activeStyle={ internals.activeStyle }>About</Link></nav>
                <h1>The Counter App</h1>
                { this.props.children }
            </div>
        );
    }
}
