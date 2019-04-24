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
import './recipes.css';
import styled from 'styled-components';
import HeaderExample from "../components/HeaderExample";
import { Carousel } from 'antd';
import { Steps, Button, message, Modal, Input, Checkbox } from 'antd';
import { Card, Col, Row, List, Avatar,Icon } from 'antd';

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

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '#',
    title: `Салат ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Простые рецепты салатов — это минимум ингредиентов и совсем немного времени на приготовление.',
    content: 'Возьмём самые простые продукты — те, которые можно купить в любом супермаркете. Например, из мясных продуктов проще всего использовать филе курицы, колбасные изделия, варёную говядину. Самые простые варианты сочетаний — это морковь, яблоко и сметана; огурцы и сметана; филе птицы, зелень, оливковое масло и уксус и т. д. ',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Recipes extends Component {
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
            <HeaderExample />
            
        <div className="search">
          <Search
          placeholder="Введите название блюда или ингредиента"
          title="Поиск"
          onSearch={value => console.log(value)}
          enterButton/>
        <br /><br />     
        
        
        </div>
       
        <div className="listrec">
        <List 
            itemLayout="vertical"
            size="small"
            pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 4,
            }}
            dataSource={listData}
            width = {250}
            renderItem={item => (
            <List.Item
            
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<img width={272} alt="logo" src={img4} />}
            >
                <List.Item.Meta
                
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
                />
                {item.content}
        </List.Item>
        )}
        />
        </div>


          <Footer style={{ textAlign: 'center' }}>
              Tamaqtan ©2019 
          </Footer>
    
        </div>
      
        );
    
      }

}


export default Recipes;