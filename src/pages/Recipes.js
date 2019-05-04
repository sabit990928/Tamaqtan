import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ReactDOM from 'react-dom';

import img7 from './images/card3.jpeg';
import './home.css';
import './recipes.css';
import styled from 'styled-components';
import HeaderExample from "../components/HeaderExample";
import { Carousel } from 'antd';
import { Steps, Button, message, Modal, Input, Checkbox } from 'antd';
import { Card, Col, Row, List, Avatar,Icon } from 'antd';
import axios from 'axios';


class Recipes extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://172.20.10.4/back/api/read.php`)
      .then(res => {
        const data = res.data.records;
        console.log("data: ", res.data.records)
        this.setState({ data });
      }).catch(res => console.log("Err: ", res))
  }

      render() {
        const { data } = this.state;
        return (
          <div>
          <HeaderExample />
          <h1>Наши блюда</h1> 
          { data.length > 0 && 
          data.map(tamaq => 
          <div style={{ background: '#ECECEC', width: "400px", flexDirection: "row"}} className="card">
            <Row gutter={3}>
              <Col>
                <Card title={tamaq.name} bordered={false} className="cards"><img src={img7} className="img5"/>

                <br/>{tamaq.recept} <br/>{tamaq.type_name}<br/>{tamaq.user_type_name}<br/>{tamaq.time_name}<br/>
                <Button type="primary" className="button1">Показать</Button></Card>
              </Col>
            </Row>
          </div>
          )
          }
        </div>
        );
    
      }

}


export default Recipes;