import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RouterList from './RouterList';

class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <RouterList />
        <Footer />
      </div>
    );
  }
}

export default Routes;
