const counterReducer = (currentState = 0, action: string) => {
    switch (action) {
        case 'INCREMENT':
            return currentState + 1;
        case 'DECREMENT':
            return currentState - 1 ;
        default:
            return currentState;
    }
}

export default counterReducer;