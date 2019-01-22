import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './containers/Home';
import Team from './containers/Team';
import Navbar from "./component/Navbar"
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <Navbar/>
                        </header>

                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/team'} component={Team}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;
