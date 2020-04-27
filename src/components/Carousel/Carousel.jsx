import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Image from 'react-bootstrap/Image';
import items from '../../shared/carouselItems.json';
import '../../styles/Carousel.css';
import hashCode from '../../utils/hash-code';

const carousel = () => {
  const carouselItemList = Array.from(items).map((item) => (
    <Carousel.Item key={hashCode(item.label)}>
      <Image
        className="d-block w-100 carousel-custom-item"
        src={item.imageUrl}
        alt={item.label}
      />
      <Carousel.Caption className="sharp-content">
        <h3>{item.label}</h3>
        <p>{item.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel controls={true} slide={true} interval={3000}>
      {carouselItemList}
    </Carousel>
  );
};

export default carousel;
