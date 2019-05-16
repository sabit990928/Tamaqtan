import React, { Component } from 'react';
import { Layout} from 'antd';

import { Redirect } from 'react-router-dom'

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/card.jpg';
import img6 from './images/card2.jpg';
import img7 from './images/card3.jpeg';
import './home.css';

import { Carousel } from 'antd';
import { Steps, Button,Input} from 'antd';
import { Card, Col, Row } from 'antd';
import StaticMenu from './StaticMenu';
const Step = Steps.Step;
const Search = Input.Search;
const {
  Footer
} = Layout;

class Home extends Component {
  state = {
    current: "",
    currentType: null,
    isSport: false,
    isPregnant: false,
    isDiet: false,
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/staticmenu' />
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  handleSportClick = e => {
    
    this.setState({
      currentType: "isSport",
      
    });
  };

  handlePregnantClick = e => {
    this.setState({
      currentType: "isPregnant"
    });
  };

  handleDietClick = e => {
    this.setState({
      currentType: "isDiet"
    });
  };




  render() {
    const { current } = this.state;
    return (
      <div className="div"> 
        {this.renderRedirect()}
        <div className="search">
          {/* <Search
          placeholder="Введите название блюда или ингредиента"
          title="Поиск"
          onSearch={value => console.log(value)}
          enterButton/>
        <br /><br /> */}

        <Carousel autoplay>
          <div><img src={"http://proka4aem.ru/wp-content/uploads/2016/06/racion-pitaniya-sportsmenov-na-kazhdyj-den.jpg"} className="img1"/></div>
          <div><img src={"https://www.9months.ru/uploads/img_cache/071/071602f02854772261411af26a992679_800x600.jpg"} className="img1"/></div>
          <div><img src={"https://images.aif.ru/004/672/1a669670ecbe35231632dc6b35726970.jpg"} className="img1"/></div>
          <div><img src={"https://i.ytimg.com/vi/61k8ui0c8GA/maxresdefault.jpg"} className="img1"/></div>
          <div><img src={"https://versiya.info/uploads/posts/2018-10/1540793707_home-1-e1503502794996.jpg"} className="img1"/></div>
        </Carousel>
        
        </div>  
        <div className="steps">
        <h1>Как получить меню на неделю?</h1> 
        <Steps current={3} className="step">    
        <Step title="Авторизация" description="Войти в систему." />
        <Step title="Тип" description="Выберите тип." />
        <Step title="Меню" description="Получить меню" />
        </Steps>
        </div>

        <div style={{ background: '#ECECEC'}} className="card">
        <h1>Популярные меню</h1> 
        <Row gutter={16} style={{ "display": "flex", "justifyContent": "center" }}>
          <Col span={6}>
            <Card title="Для спортсменов" bordered={false} className="cards">
            <img src={"https://cs8.pikabu.ru/post_img/big/2018/12/22/5/1545461240187023318.jpg"} className="img5"/>
              
            <br/>Основы правильного питания спортсменов: продукты для полноценного рациона.<br/> 
            {/* <Button type="primary" className="button1" onClick={this.setRedirect}>Подробнее</Button> */}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Для беременных" bordered={false} className="cards">
            <img src={"https://static.detstrana.ru/public/article/25/5b/13/1334dd_c12b.jpg"} className="img5"/>

            <br/>Правильное питание при беременности: здоровая диета <br/> 
            {/* <Button type="primary" className="button1" onClick={this.handlePregnantClick}>Подробнее</Button> */}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="На диете" bordered={false} className="cards">
            <img src={"http://www.sncmedia.ru/upload/iblock/411/411e22b145775b447224bb11c5c2f4c9_w877_h500_crp.jpg"} className="img5"/>

            <br/>Диета ПП — правильная диета для похудения <br/> 
            {/* <Button type="primary" className="button1" onClick={this.handleDietClick}>Подробнее</Button> */}
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

export default Home;