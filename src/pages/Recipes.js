import React, { Component } from 'react';
import './home.css';
import './recipes.css';
import {Button} from 'antd';
import { Card, Col, Row} from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const arrayChunk = (array, chunkSize) => Array(Math.ceil(array.length / chunkSize))
  .fill()
  .map((_, index) => index * chunkSize)
  .map(begin => array.slice(begin, begin + chunkSize));
class Recipes extends Component {

  state = {
    data: [],
    redirect: false
  }

  componentDidMount() {
    axios.get(`http://localhost/back/api/read.php`)
      .then(res => {
        const data = res.data.records;
        console.log("data: ", res.data.records)
        this.setState({ data });
      }).catch(res => console.log("Err: ", res))
  }

  setRedirect = (event) => {
    console.log(event, ' event')
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/recept',
        tamaq: {

        }
      }} />
    }
  }

  handleClick = () => {

  }

      render() {
        const { data } = this.state;
        const tamaqs = arrayChunk(data, 3)
        console.log(tamaqs, ' tamaq')
        return (
          <div>
          <h1>Наши блюда</h1> 
          { data.length > 0 && 
          tamaqs.map(tamaqtar => 
            <Row gutter={16} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              {
                tamaqtar.map(tamaq => 
                <Col>
                  <Card title={tamaq.name} bordered={false} className="cards"><img src={tamaq.img_address} className="img5"/>
                  <br/>{tamaq.type_name}<br/>{tamaq.user_type_name}<br/>{tamaq.time_name}<br/>
                  <Button type="primary" className="button1" onClick={this.setRedirect}>Показать</Button></Card>
                </Col>
              )
              }
            </Row>
          )
          }
        </div>
        );
    
      }

}


export default Recipes;