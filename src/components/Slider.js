import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';

const StyledCarousel = styled(Carousel)`
  width: 800px;
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  color: #fff;
`;

const Slider = () => (
    <StyledCarousel autoplay>
    <div><h3>Питание для спортсменов</h3></div>
    <div><h3>Для беременных</h3></div>
    <div><h3>Для тех, кто на диете</h3></div>
    <div><h3>Для тех, кто болеет гастритом</h3></div>
  </StyledCarousel>
);

export default Slider;