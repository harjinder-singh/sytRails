import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../store/reducers'
import App from "../components/App"

document.addEventListener("DOMContentLoaded", () => {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <Route path={'/'} component={App} />
      </Router>
    </Provider>), document.body.appendChild(document.createElement('div')));
});
