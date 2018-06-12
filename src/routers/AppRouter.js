import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensedPage from '../components/AddExpensedPage';
import EditExpensedPage from '../components/EditExpensedPage';
import HelpPage from '../components/HelpPage';
import NotFountPage from '../components/NotFountPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensedPage} />
                <PrivateRoute path="/edit/:id" component={EditExpensedPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFountPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;