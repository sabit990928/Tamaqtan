import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import { Menu, Icon, Button, Layout, Dropdown} from 'antd';
import { Steps,Modal, Form, Input,  Checkbox,Card } from 'antd';

import img9 from './images/kawa.jpg';
import './welcome.css'
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Step = Steps.Step;
const Search = Input.Search;
const {
  Header, Footer, Sider, Content,
} = Layout;


const img1 = "https://estaticos.sport.es/resources/jpg/1/0/1553021795901.jpg";
const img2 = "https://www.9months.ru/uploads/img_cache/071/071602f02854772261411af26a992679_800x600.jpg"
const img3 = "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492119728/articles/2016/02/10/anorexia-isn-t-just-for-teenagers-why-eating-disorders-strike-in-middle-age/160209-arnold-anorexia-tease_yo7swb"
const img4 = "https://med.vesti.ru/wp-content/uploads/2018/07/shutterstock_713424970.jpg"

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
  redirect: false
`;

const { Meta } = Card;
class Welcome extends Component {
  state = {
    collapsed: false,
    redirect: false,
    type: null
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {

      this.props.history.push({
        pathname:"/menu",
        state:{
            type: this.state.type
        }
      });
    }
  }

  handleSport = () => {
    this.setState({ type: "sport", collapsed: 
    !this.state.collapsed,
    redirect: true })
  }

  handleIll = () => {
    this.setState({ type: "ill",collapsed: 
    !this.state.collapsed,
    redirect: true })
  }

  handleDiet = () => {
    this.setState({ type: "diet", collapsed: 
    !this.state.collapsed,
    redirect: true,
  })
  }

  handleUsuall = () => {
    this.setState({ type: "usual", collapsed: 
    !this.state.collapsed,
    redirect: true,
  })
  }

  handleBerem = () => {
    this.setState({ type: "berem", collapsed: 
    !this.state.collapsed,
    redirect: true,
  })
  }

  // toggleCollapsed = () => {
  //   this.setState({
  //     collapsed: 
  //     !this.state.collapsed,
  //   });
  // }
  render() {
    return (
      <div className="div">
        {this.renderRedirect()}

          <h2>Меню по категориям</h2>
          <div style={{ background: 'white', padding: '30px' }} className="recept">
        <Row gutter={16}>
          <Col span={6}>
            {/* <a href="/menu"> */}
            <Card 
              onClick={this.handleSport}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img1} className="suret" />}

          >
                <Meta
                  title="Спортсменам"                  
                />
          </Card>
          {/* </a> */}
      </Col>
      <Col span={6}>
      <Card
                onClick={this.handleBerem}

                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={img2} className="suret"/>}
                
                
          >
                <Meta
                  title="Беременным"                  
                />
          </Card>
          </Col>
          <Col span={6}>
          <Card
                onClick={this.handleDiet}

                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img3} className="suret"/>}
                
          >
                <Meta
                  title="Для похудения"                  
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
                onClick={this.handleUsuall}

          >
                <Meta
                  title="Ежедневное"                  
                />
          </Card>
          </Col>
          <Col span={6}>
            <Card
                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={img4} className="suret"/>}
                onClick={this.handleIll}

          >
                <Meta
                  title="Для болеющих"                  
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
