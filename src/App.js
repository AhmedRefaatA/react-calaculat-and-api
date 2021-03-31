import React from 'react';
import Movie from './Movie';
import Home from './Home';
import Calculator from './Calculator';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {


    render() {
        return (
            <div>
                <Router >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/movies" className="nav-link">Movies</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/calculator" className="nav-link">Calculator</Link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                        <Switch>
                            <Route path="/movies">
                                    <Movie />
                            </Route>
                            <Route path="/calculator">
                                    <Calculator />
                            </Route>
                            <Route path="/">
                                    <Home />
                            </Route>
                        </Switch>
                </Router>
            </div>
        );
    }
}


export default App;
