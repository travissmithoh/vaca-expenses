import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test(`should create SetStartDate object`, () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test(`should create SetEndDate object`, () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test(`should set sortByAmount object`, () => {
    const action = sortByAmount();
    expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
});

test(`should set sortByDate object`, () => {
    const action = sortByDate();
    expect(action).toEqual({type: 'SORT_BY_DATE'});
});

test(`should set SetTextFilter object`, () => {
    const action = setTextFilter('Test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Test'
    });
});

test(`should set SetTextFilter object`, () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});