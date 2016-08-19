import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, Link } from 'react-router';

var App = React.createClass({

  render: function(){
    return (
        <div>
          <h1>Data Analysis</h1>
             <nav>
                <ul>
                   <li><Link to="/">Index</Link></li>
                   <li><Link to="/new">Add New</Link></li>
                   <li><Link to="/chart_view">View As Graph</Link></li>
                </ul>
             </nav>
             <div>
              {this.props.children}
             </div>
        </div>
      );
  }

})

export default App