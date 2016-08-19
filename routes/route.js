import React, { Component } from 'react'
import { Route, IndexRoute} from 'react-router'
import Form from '../components/Form';
import Index from '../components/Index';
import GraphView from '../components/GraphView';
import App from '../components/App';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Index}/>
    <Route path="new" component={Form}/>
    <Route path="chart_view" component={GraphView}/>
  </Route>
)