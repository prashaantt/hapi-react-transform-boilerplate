export const incrementCounter = (amount) => {

    return {
        type: 'INCREMENT_COUNTER',
        amount
    };
};


export const decrementCounter = (amount) => {

    return {
        type: 'DECREMENT_COUNTER',
        amount
    };
};


export const initCounter = () => {

    return {
        type: 'INIT_COUNTER'
    };
};
