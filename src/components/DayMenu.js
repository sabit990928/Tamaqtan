import React, { Component } from 'react';
import { Card, Col, Row, Button} from 'antd';
import { Redirect, Link } from 'react-router-dom'
import { saveMenu } from '../actions/auth';
import { connect } from 'react-redux';

class DayMenu extends Component {

  handleJump = () => {
    const { savedMenu } = this.props;
    console.log('saved: ', savedMenu)
    this.props.saveMenu(savedMenu)
  }

  render () {
    const {
      breakfast, 
      breakfastId,
      breakfastImg,
      lunch,
      lunchId,
      lunchImg,
      dinner,
      dinnerId,
      dinnerImg,
      day
    } = this.props;
    return (
      <div>
        <hr />
        <h2>{day}</h2>
        <Row gutter={15} style={{ display: "flex", justifyContent: "center", marginBottom: "10px", width: '100%' }}>
          <Col>
            <Card title="Завтрак" bordered={false} className="cards"><img src={breakfastImg} className="img5"/>
            <br/>{breakfast}<br/>
            <Link to={`/food/${breakfastId}`}
              ><Button type="primary" className="button1" onClick={this.handleJump} >Показать</Button></Link></Card>
          </Col>
          <Col>
            <Card title="Обед" bordered={false} className="cards"><img src={lunchImg} className="img5"/>
            <br/>{lunch}<br/>
            <Link to={`/food/${lunchId}`}
              ><Button type="primary" className="button1" onClick={this.handleJump}>Показать</Button></Link></Card>
          </Col>
          <Col>
            <Card title="Ужин" bordered={false} className="cards"><img src={dinnerImg} className="img5"/>
            <br/>{dinner}<br/>
            <Link to={`/food/${dinnerId}`}
              ><Button type="primary" className="button1" onClick={this.handleJump}>Показать</Button></Link></Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, { saveMenu })(DayMenu);