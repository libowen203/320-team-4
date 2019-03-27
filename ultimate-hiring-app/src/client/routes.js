import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import PublicView from './Pageviews/PublicView'
import ManagerView from './Pageviews/ManagerView';


export default(
    <Route path="/" component ={App}>
        <IndexRoute component ={PublicView}/>
        <Route path='/ManagerView' component= {ManagerView}/>
    </Route>
)