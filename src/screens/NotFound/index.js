import React from 'react';
import { Link } from 'react-router';


export default class NotFound extends React.Component {
    render() {

        return (
            <div>Nothing here, <Link to="/">go home!</Link></div>
        );
    }
}
