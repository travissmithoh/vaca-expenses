import { createStore } from 'redux';
//  Action generators
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT_COUNT',
        incrementBy
    };
};
const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT_COUNT',
        decrementBy: decrementBy
    };
};
    // without explict return
const setCount = ({count}) => ({
        type: 'SET',
        count
});
    //  inline with no parameters
const resetCount = () => ({type: 'RESET_COUNT'});

// Reducers
// 1. are pure functions
// 2. never change state or action

const countReducer = (state = { count: 0 }, action)=> {
    // Actions
    switch (action.type){
        case 'INCREMENT_COUNT':
            return { count: state.count + action.incrementBy }
        case 'DECREMENT_COUNT':
            return { count: state.count - action.decrementBy }
        case 'RESET_COUNT':
            return { count: 0 }
        case 'SET':
            return { count: action.count }
        default:
            return state;
    }    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});
//  Action calls
store.dispatch(setCount({count: 13}));
store.dispatch(incrementCount({incrementCount: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
// unsubscribe();
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));


