import React, { Component } from 'react';
import axios from 'axios';

class Organizations extends Component {
  state = {
    organizationList: [],
  };

  componentDidMount() {
    axios
      .get('/allTypes', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((items) => {
        console.log('items', items);
      });
  }
  render() {
    return (
      <div>
        <p>efef</p>
      </div>
    );
  }
}

export default Organizations;
