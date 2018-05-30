import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description ='', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,  //in cents
        createdAt: createdAt
    }
});

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(exp => exp.id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};

// timestamp (milliseconds)
// Jan 1 1970  (unix epoch)

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount')  {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('Start Filter');
    console.log(visibleExpenses);
    console.log('End Filter');
});

const exp1 = store.dispatch(addExpense({ description: 'Renty', amount: 100, createdAt: -21000 }));
const exp2 = store.dispatch(addExpense({ description: 'Coffee', amount: 50, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: exp1.expense.id }));

// store.dispatch(editExpense(exp2.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('fee'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// const demoState = {
//     expenses: [{
//         id: 'sdsdfdf',
//         description: 'Rent',
//         note: 'final payment',
//         amount: 54500,  //in cents
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };

// const user = {
//     name: 'Travis',
//     age: 46,
//     address: {
//         type: 'Home',
//         street: '123 one way',
//         city: 'Bay Village'
//     }
// }

// console.log({
//     ...user,
//     occupation: 'Application Analyst'
// })