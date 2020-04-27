import React from 'react';
import '../../styles/Home.css';
import Carousel from '../../components/Carousel/Carousel';

const home = () => {
  return (
    <div>
      <Carousel />

      <section className="px-md-5 pb-5 pt-4">
        <h3 className="d-flex justify-content-center mb-5">Our Benefits</h3>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="w-25 d-flex flex-column">
            <p>fgfgh</p>
            <h5 className="d-flex justify-content-center">Круглосуточно</h5>
            <p>fghfgh</p>
          </div>
          <div className="w-25 d-flex flex-column">
            <p>fghfgh</p>
            <h5 className="d-flex justify-content-center">Сотрудничество</h5>
            <p>fghfgh</p>
          </div>
          <div className="w-25 flex-column">
            <p>rgerge</p>
            <h5 className="d-flex justify-content-center">Время</h5>
            <p>ergerg</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
