import React, { Component } from 'react';
import './App.css';
import { Menu, Icon, Button, Layout, Dropdown} from 'antd';
import { Steps,Modal, Form, Input,  Checkbox,Card } from 'antd';
import { HeaderExample } from '../components'
import img1 from './images/salat.jpg';
import img2 from './images/sup.jpg';
import img3 from './images/zakuska.jpg';
import img4 from './images/ekinwi.jpg';
import img5 from './images/vipechka.jpg';
import img6 from './images/napitki.jpg';
import img7 from './images/desert.jpg';
import img8 from './images/myaso.jpg';
import img9 from './images/kawa.jpg';
import './welcome.css'
import styled from 'styled-components';
import { Row, Col } from 'antd';

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

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/profile" className="link">Мой профиль</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="" className="link">Мое меню</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3"><a href="" className="link" href="/home">Выйти</a></Menu.Item>
  </Menu>
);
const { Meta } = Card;
class Welcome extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className="div">
      {/* <HeaderExample /> */}
        <Container>
        <LeftContainer>
        <PageLink href="#" title="Tamaqtan" className="logo">TAMAQTAN</PageLink>    
        </LeftContainer>

        <RightContainer>    
          {/* <PageLink href="#" title="Главная">Продукты</PageLink>      
          <PageLink href="#" title="Рецепты">Кухни мира</PageLink>
          <PageLink href="#" title="Супер поиск">Супер поиск</PageLink> */}
          <PageLink href="/home" title="Главная">Главная</PageLink>      
          <PageLink href="/recipes" title="Рецепты">Рецепты</PageLink>
          <PageLink href="/randomFood" title="Рандомное блюдо">Рандомное блюдо</PageLink>
          <Dropdown overlay={menu} trigger={['click']}>
              <a className="loginn" href="#">
                Толегенов Нурбол <Icon type="down" />
              </a>
          </Dropdown>
        </RightContainer>
      </Container>

      <div className="search">
          <Search
          placeholder="Введите название блюда или ингредиента"
          title="Поиск"
          onSearch={value => console.log(value)}
          enterButton/>
        </div>

          <div style={{ background: 'white', padding: '30px' }} className="recept">
    <Row gutter={16}>
      <Col span={6}>
      <a href="/recipes">
      <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img1} className="suret" />}
                
          >
                <Meta
                  title="Салаты"                  
                />
          </Card>
          </a>
      </Col>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={img2} className="suret"/>}
                
                
          >
                <Meta
                  title="Супы"                  
                />
          </Card>
      </Col>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img3} className="suret"/>}
                
          >
                <Meta
                  title="Закуски"                  
                />
          </Card>
      </Col>

      
    </Row>
    <br></br>
    <br></br>
    <Row gutter={16}>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img9} className="suret" />}
                
          >
                <Meta
                  title="Каши"                  
                />
          </Card>
      </Col>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={img8} className="suret"/>}
                
                
          >
                <Meta
                  title="Блюда из мяса"                  
                />
          </Card>
      </Col>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img7} className="suret"/>}
                
          >
                <Meta
                  title="Десерты"                  
                />
          </Card>
      </Col>

      
    </Row>
  
    <br></br>
    <br></br>


    <Row gutter={16}>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img4} className="suret" />}
                
          >
                <Meta
                  title="Вторые блюда"                  
                />
          </Card>
      </Col>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={img5} className="suret"/>}
                
                
          >
                <Meta
                  title="Выпечка"                  
                />
          </Card>
      </Col>
      <Col span={6}>
      <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img6} className="suret"/>}
                
          >
                <Meta
                  title="Напитки"                  
                />
          </Card>
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

export default Welcome;
