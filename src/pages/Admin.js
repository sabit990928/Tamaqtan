import React, { Component } from "react";
import {
  Form, Select, Input, Button, 
} from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;
const Option = Select.Option;
const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  text-align:center;
`;


class Admin extends Component{
      
  state = {
    tname: null,
    recept: null,
    img_address: null,
    time_id: '1', 
  }
  


  handleNameChange = (event) =>{
    this.setState({ tname: event.target.value })
  }
  handleReceptChange = (event) =>{
    this.setState({ recept: event.target.value })
  }
  handleImgChange = (event) =>{
    this.setState({ img_address: event.target.value })
  }
  handleChange(time_id) {
    this.setState({ time_id });
  }



  handleSubmit = (e) => {
    e.preventDefault();
    const { tname, recept, img_address, time_id } = this.state;
    const tamaq = {
      tname: tname,
      recept: recept,
      img_address: img_address,
      time_id: time_id,
    }
    console.log(tamaq);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>   
              <Container>
              
              <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                  <h4>Добавить блюдо</h4><br/>
                    <Form.Item label="Название:">
                        {getFieldDecorator('tname', {
                            rules: [{ required: true, message: 'Please input your note!' }],})(
                              <Input name="tname" onChange={this.handleNameChange}/> )}
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
                                
                                onChange={this.handleChange}
                            >
                                 <Option value="1">Завтрак</Option>
                                 <Option value="2">Обед</Option>
                                 <Option value="3">Ужин</Option>
                                 <Option value="4">Поздний завтрак</Option>
                                 <Option value="5">Полдник</Option>
                                 <Option value="6">Поздний ужин</Option>
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