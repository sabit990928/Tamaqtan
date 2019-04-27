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
import axios from 'axios';


class Recipes extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://10.27.177.159/back/api/get_random_food.php`)
      .then(res => {
        const data = res.data.records;
        console.log("data: ", res.data.records)
        await this.setState({ data });
      }).catch(res => console.log("Err: ", res))
  }

    
    
    
      render() {
        const { data } = this.state;
         return (
           <div>
             Data
             { data }
           </div>
        //   <div className="div"> 
        //     <HeaderExample />
            
        // <div className="search">
        //   <Search
        //   placeholder="Введите название блюда или ингредиента"
        //   title="Поиск"
        //   onSearch={value => console.log(value)}
        //   enterButton/>
        // <br /><br />     
        
        
        // </div>
       
        // <div className="listrec">
        // <List 
        //     itemLayout="vertical"
        //     size="small"
        //     pagination={{
        //     onChange: (page) => {
        //         console.log(page);
        //     },
        //     pageSize: 4,
        //     }}
        //     dataSource={listData}
        //     width = {250}
        //     renderItem={item => (
        //     <List.Item
            
        //         key={item.title}
        //         actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        //         extra={<img width={272} alt="logo" src={img4} />}
        //     >
        //         <List.Item.Meta
                
        //         avatar={<Avatar src={item.avatar} />}
        //         title={<a href={item.href}>{item.title}</a>}
        //         description={item.description}
        //         />
        //         {item.content}
        // </List.Item>
        // )}
        // />
        // </div>


        //   <Footer style={{ textAlign: 'center' }}>
        //       Tamaqtan ©2019 
        //   </Footer>
    
        // </div>
      
      
        );
    
      }

}


export default Recipes;