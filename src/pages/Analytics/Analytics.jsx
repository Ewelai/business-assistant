import React from 'react';
import analyticsData from '../../shared/analytics';
import hashCode from '../../utils/hash-code';

const analytics = () => {
  const parseData = Array.from(analyticsData).map(item => {
    return (<div className="border m-2" key={hashCode(item.id)}>
      <p>Title: {item.title}</p>
      <p>Title: {item.text}</p>
    </div>);
  });

  return ( <div>{parseData}</div> );
};
export default analytics;
