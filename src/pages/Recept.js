import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Card, Col, Row, Button } from 'antd';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

class Recept extends Component {
  state = {
    data: []
  }

    render() {
      const { data } = this.props;
      return (
        <Container>
          
        </Container>
      );
    } 
}


export default Recept;