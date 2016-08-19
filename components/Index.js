import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes/route';



import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()

const Routes = (
  <Router history={history}>
    { routes }
  </Router>)

var Index = React.createClass({

  render: function(){
    return (
        <div>
          {Routes}
        </div>
      );
  }

})

export default Index