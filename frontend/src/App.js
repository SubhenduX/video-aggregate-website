import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';
import CategoryPage from './components/CategoryPage';
import CategoryDetailPage from './components/CategoryDetailPage';
import StarPage from './components/StarPage';
import StarDetailPage from './components/StarDetailPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/video/:id" component={VideoPage} />
                <Route path="/categories" component={CategoryPage} />
                <Route path="/category/:id" component={CategoryDetailPage} />
                <Route path="/stars" component={StarPage} />
                <Route path="/star/:id" component={StarDetailPage} />
            </Switch>
        </Router>
    );
}

export default App;
