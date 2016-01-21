const defaultState = -1;


const counterReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + action.amount;
        case 'DECREMENT_COUNTER':
            return state - action.amount;
        case 'INIT_COUNTER':
            return 0;
        default:
            return state;
    }
};


export default counterReducer;
