import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'

const App = (props)=>{

    let routes = (
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Redirect to='/' />
        </Switch>
    )
    return (
        <div>
            {routes}
        </div>
    );
}

export default App
