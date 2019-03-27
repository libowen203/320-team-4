import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Pageviews/DefaultView';
import ManagerView from './Pageviews/ManagerView';

export default(
    <Route path="/" component ={App}>
        <IndexRoute component ={DefaultView}/>
        <Route path='/ManagerView' component= {ManagerView}/>
    </Route>
)