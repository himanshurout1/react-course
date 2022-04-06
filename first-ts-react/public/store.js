const counterReducer = (currentState = {count: 0}, action) => {
    switch (action) {
        case 'INCREMENT':
            return { ...currentState, count: currentState.count + 1 };
        case 'DECREMENT':
            return { ...currentState, count: currentState.count - 1 };
        default:
            return currentState;
    }
}

const createStore = (reducer) => {
    let state;
    let subscribers = [];
    const getState = () => {
        return state;
    }
    const dispatch = (action) => {
        state = reducer(state, action);
        console.log(state);
        subscribers.forEach(function (subscriber) {
            subscriber();
        });
    }
    const subscribe = (listenerCallback) => {
        subscribers.push(listenerCallback);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

const store = createStore(counterReducer);

store.subscribe(function () {
    const state = store.getState();
    document.getElementById("btnState").innerHTML = state.count;
});

store.dispatch();

document.getElementById("btnIncr").addEventListener("click", function (event) {
    store.dispatch("INCREMENT");
});

document.getElementById("btnDcr").addEventListener("click", function (event) {
    store.dispatch("DECREMENT");
});