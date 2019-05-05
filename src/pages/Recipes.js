import React, { Component } from 'react';
import './home.css';
import './recipes.css';
import {Button} from 'antd';
import { Card, Col, Row} from 'antd';
import axios from 'axios';


class Recipes extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://10.27.177.16/back/api/read.php`)
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
          <h1>Наши блюда</h1> 
          { data.length > 0 && 
          data.map(tamaq => 
          <div style={{ background: '#ECECEC', width: "400px", flexDirection: "row"}} className="card">
            <Row gutter={3}>
              <Col>
                <Card title={tamaq.name} bordered={false} className="cards"><img src={tamaq.img_address} className="img5"/>

                <br/>{tamaq.type_name}<br/>{tamaq.user_type_name}<br/>{tamaq.time_name}<br/>
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