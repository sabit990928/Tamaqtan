import React, { Component } from "react";
import {
  Form, Select, Input, Button, 
} from 'antd';
import styled from 'styled-components';
import axios from 'axios';
const { TextArea } = Input;
const Option = Select.Option;
const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  text-align:center;
`;

class Admin extends Component{
  state = {
    name: null,
    recept: null,
    img_address: null,
    time_id: null,
    type_id: null,
    user_type_id: null
  }

  handleNameChange = (event) =>{
    this.setState({ name: event.target.value })
  }
  handleReceptChange = (event) =>{
    this.setState({ recept: event.target.value })
  }
  handleImgChange = (event) =>{
    this.setState({ img_address: event.target.value })
  }
  handleTimeChange = (event) =>{
    console.log("event: ", event)
    this.setState({ time_id: event })
  }
  handleTypeChange = (event) =>{
    console.log("event: ", event)
    this.setState({ type_id: event })
  }
  handleUserTypeChange = (event) =>{
    console.log("event: ", event)
    this.setState({ user_type_id: event })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { name, recept, img_address, time_id ,type_id,user_type_id } = this.state;
    const time = parseInt(time_id)
    const type = parseInt(type_id)
    const userType = parseInt(user_type_id)
    const tamaq = {
      name: name,
      recept: recept,
      img_address: img_address,
      time_id: time,
      type_id: type,
      user_type_id: userType,
    }
    console.log(tamaq);
    axios.post('http://localhost/back/api/create_food.php', tamaq)
    .then(res => {
      console.log(res);
      this.props.history.push('/admin')
    })
    .catch(res => {
      console.log('Tamaq add is failed ', res)
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>   
              <Container>
              
              <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                  <h4>Добавить блюдо</h4><br/>
                    <Form.Item label="Название:">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your note!' }],})(
                              <Input name="name" onChange={this.handleNameChange}/> )}
                    </Form.Item>

                    <Form.Item label="Рецепт:">
                        {getFieldDecorator('recept', {
                            rules: [{ required: true, message: 'Please input your note!' }],})(
                              <TextArea placeholder="" name="recept" autosize={{ minRows: 2, maxRows: 6 }} onChange={this.handleReceptChange}/> )}
                    </Form.Item>

                    <Form.Item label="Изображение (url):">
                        {getFieldDecorator('img_address', {
                            rules: [{ required: true, message: 'Please input your note!' }],})(
                              <Input name="img_address" onChange={this.handleImgChange}/>)}
                      </Form.Item>

                      <Form.Item label="Время:">
                        
                            <Select
                                placeholder="Выберите время"
                                
                                name="time_id"
                                
                                onChange={this.handleTimeChange}
                            >
                                <Option value="1">Завтрак</Option>
                                <Option value="2">Обед</Option>
                                <Option value="3">Ужин</Option>
                                <Option value="4">Поздний завтрак</Option>
                                <Option value="5">Полдник</Option>
                                <Option value="6">Поздний ужин</Option>
                            </Select>
                        
                      </Form.Item>

                        <Form.Item label="Тип еды:">
                        
                        <Select
                            placeholder="Выберите тип еды"
                            
                            name="type_id"
                            
                            onChange={this.handleTypeChange}
                        >
                            <Option value="1">Суп</Option>
                            <Option value="2">Жаренное</Option>
                            <Option value="3">Тушонное</Option>
                            <Option value="4">Напитки</Option>
                            <Option value="5">Салаты</Option>
                            <Option value="6">Кашы</Option>
                        </Select>
                    
                  </Form.Item>

                  
                  <Form.Item label="Тип пользователя:">
                        
                        <Select
                            placeholder="Выберите тип пользователя"
                            
                            name="user_type_id"
                            
                            onChange={this.handleUserTypeChange}
                        >
                            <Option value="1">Спорт</Option>
                            <Option value="2">Диета</Option>
                            <Option value="3">Беременная</Option>
                            <Option value="4">Больные</Option>
                            <Option value="5">Ежедневные</Option>
                            
                        </Select>
                    
                  </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                      <Button type="submit" htmlType="submit">Submit</Button>
                    </Form.Item>
                    
              </Form>
              </Container>
      </div>
    )
  }
}

export default Form.create()(Admin);