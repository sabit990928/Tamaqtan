import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ReactDOM from 'react-dom';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/card.jpg';
import img6 from './images/card2.jpg';
import img7 from './images/card3.jpeg';
import './home.css';
import styled from 'styled-components';
import { Carousel } from 'antd';
import { Steps, Button, message, Modal, Input, Checkbox } from 'antd';
import { Card, Col, Row } from 'antd';

const Step = Steps.Step;
const Search = Input.Search;
const {
  Header, Footer, Sider, Content,
} = Layout;


const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #2E9AFE;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  left: 40px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 70%;
`;

const PageLink = styled.a`
  padding-right: 10px;  
  font-size: 15px;
  text-decoration: none;
  color: white;
  padding-right: 15 px;
  margin-left: 65px;
  
`;

class Home extends Component {
  state = {
    current: ""
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };



  render() {
    const { current } = this.state;
    return (
      <div className="div"> 
        <div className="search">
          <Search
          placeholder="Введите название блюда или ингредиента"
          title="Поиск"
          onSearch={value => console.log(value)}
          enterButton/>
        <br /><br />

        <Carousel autoplay>
          <div><img src={img1} className="img1"/></div>
          <div><img src={img2} className="img1"/></div>
          <div><img src={img3} className="img1"/></div>
          <div><img src={img4} className="img1"/></div>
        </Carousel>
        
        </div>  
        <div className="steps">
        <h1>Как получить меню на неделю?</h1> 
        <Steps current={3} className="step">    
        <Step title="Авторизация" description="Войти в систему." />
        <Step title="Рецепты" description="Выбирать рецепты." />
        <Step title="Мое меню" description="Недельное меню." />
        </Steps>
        </div>

        <div style={{ background: '#ECECEC'}} className="card">
        <h1>Популярные рецепты</h1> 
        <Row gutter={16}>
          <Col span={8}>
            <Card title="САЛАТ ЦЕЗАРЬ" bordered={false} className="cards"><img src={img5} className="img5"/><br/>Батон ...... 250гр. <br/>Куриное филе ...... 300гр. <br/> <Button type="primary" className="button1">Показать</Button></Card>
          </Col>
          <Col span={8}>
            <Card title="ПЫШНЫЕ СЫРНИКИ" bordered={false} className="cards"><img src={img6} className="img5"/><br/>Творог ...... 200гр. <br/>Яйцо ...... 1шт. <br/> <Button type="primary" className="button1">Показать</Button></Card>
          </Col>
          <Col span={8}>
            <Card title="СТЕЙК ИЗ ИНДЕЙКИ" bordered={false} className="cards"><img src={img7} className="img5"/><br/>Морковь   ...... 1 шт. <br/>Индейка ...... 500гр. <br/> <Button type="primary" className="button1">Показать</Button></Card>
          </Col>
        </Row>
      </div>

      <Footer style={{ textAlign: 'center' }}>
          Tamaqtan ©2019 
      </Footer>

    </div>
  
    );

  }

 
  }


export default Home;