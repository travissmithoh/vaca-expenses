import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 with no expense', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should add a single expense', () => {
    const res = selectExpensesTotal([
        expenses[0]
    ]);
    expect(res).toBe(195);
});

test('should add multiple expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});