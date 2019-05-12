import React, { Component } from 'react';
import axios from 'axios';

import { Card, Col, Row, Button } from 'antd';

class RandomFood extends Component {
  state = {
    data: []
  }
  fetchRandomFood = () => {
    axios.get(`http://localhost/back/api/get_random_food.php`)
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
            <Button onClick={this.fetchRandomFood}>Найти случайное блюдо</Button>
            { data.length > 0 && <div style={{ background: '#ECECEC'}} className="card">
              <h1>Ваше блюдо</h1> 
              <Row gutter={16}>
      
                <Col span={8}>
                  <Card title={data[0].name} bordered={false} className="cards"><img src={data[0].img_address} className="img5"/>

                  <br/>{data[0].type_name}<br/>{data[0].user_type_name}<br/>{data[0].time_name}<br/>
                  <Button type="primary" className="button1">Показать</Button></Card>
                </Col>
            
              </Row>
            </div>
            }
          </div>
        );
      }
      
}


export default RandomFood;