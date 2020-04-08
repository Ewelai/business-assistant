import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About/About.jsx';
import Home from '../pages/Home/Home.jsx';
import Analytics from '../pages/Analytics/Analytics.jsx';

const RouterList = () => (
  <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/about" component={ About } />
    <Route path="/analytics" component={ Analytics } />
    <Redirect to="/"/>
  </Switch>
);

export default RouterList;
