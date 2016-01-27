import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Clicker from './Clicker';
import * as CounterActions from './actions';


const mapStateToProps = (state) => {

    return { counter: state.counter };
};


class Counter extends React.Component {
    render() {

        const { counter, dispatch } = this.props;

        return (
            <div>
                <h2>Counter: { counter }</h2>
                <Clicker
                    type='increment'
                    amount={ 1 }
                    { ...bindActionCreators(CounterActions, dispatch) }
                />
                <Clicker
                    type='decrement'
                    amount={ 1 }
                    { ...bindActionCreators(CounterActions, dispatch) }
                />
            </div>
        );
    }
}


export default connect(mapStateToProps)(Counter);
