import { Route, Switch, Redirect } from 'react-router-dom';

function auth ({
    loggedIn,
}) {
    return (
        <Switch>
            <Route path='/signup'></Route>
            <Route path='/signin'></Route>
        </Switch>
    );
}