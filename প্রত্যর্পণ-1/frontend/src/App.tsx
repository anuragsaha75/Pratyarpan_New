import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Donate from './pages/Donate';
import Admin from './pages/Admin';
import Gallery from './pages/Gallery';
import Auth from './components/Auth';
import Donation from './components/Donation';
import AdminDashboard from './components/AdminDashboard';
import GalleryComponent from './components/Gallery';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/donate" component={Donate} />
        <Route path="/admin" component={Admin} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/auth" component={Auth} />
        <Route path="/donation" component={Donation} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/gallery-component" component={GalleryComponent} />
      </Switch>
    </Router>
  );
};

export default App;