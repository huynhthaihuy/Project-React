import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import registerServiceWorker from "./registerServiceWorker";
import firebase from "./firebase";
import Detail from "./component/Detail";
import "semantic-ui-css/semantic.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { setUser, clearUser } from "./actions";
// import ColorPanel from "./component/ColorPanel/ColorPanel";
import SidePanel from "./component/Panel/SidePanel";
import Contact from "./component/Contact";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/user");
      } else {
        this.props.history.push("/");
        this.props.clearUser();
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/detail" component={Detail} />
        <Route path="/user" component ={SidePanel}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    );
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading,
});

const RootWithAuth = withRouter(
  connect(
    mapStateFromProps,
    { setUser, clearUser }
  )(Root)
);

ReactDOM.render(
  <Provider store = {store}>
  <Router>
    <RootWithAuth />
  </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
