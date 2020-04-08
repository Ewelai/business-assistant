import React, {Component} from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import RouterList from './RouterList.jsx';

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
