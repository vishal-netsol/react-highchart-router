// react dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Routes
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory()

// Add Form
import Form from './components/Form'

// index

import Index from './components/Index'

ReactDOM.render(<Index/>, document.getElementById("bar"));