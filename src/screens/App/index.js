import React from 'react';
import { IndexLink, Link } from 'react-router';


const styles = {
    activeLinkStyle: {
        color: 'grey',
        textDecoration: 'none',
        cursor: 'default',
        pointerEvents: 'none'

    },
    navSeparator: {
        paddingLeft: 5,
        paddingRight: 5
    }
};


export default class App extends React.Component {
    render() {

        return (
            <div>
                <nav>
                    <IndexLink to="/" activeStyle={ styles.activeLinkStyle }>Home</IndexLink>
                    <span style={ styles.navSeparator }>|</span>
                    <Link to="/about" activeStyle={ styles.activeLinkStyle }>About</Link>
                </nav>
                <h1>The Counter App</h1>
                <hr/>
                { this.props.children }
            </div>
        );
    }
}
