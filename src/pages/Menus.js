import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import { Table, Button, Icon} from 'antd';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 260px;
  align-items: flex-end;
`

const columns = [
  { title: 'Завтрак', dataIndex: 'f1_name', key: 'name',
    render: (text, {f1_id}) => <Link to={`/food/${f1_id}`}
    >{text}</Link>
    
},
  { title: 'Обед', dataIndex: 'f2_name', key: 'age', 
  render: (text, {f2_id}) => <Link to={`/food/${f2_id}`}
  >{text}</Link>
},
  { title: 'Ужин', dataIndex: 'f3_name', key: 'address',     
  render: (text, {f3_id}) => <Link to={`/food/${f3_id}`}
  >{text}</Link> },
];

class Menus extends Component{
  state = {
    data: []
  }
  
  componentDidMount(){
    switch(this.props.location.state.type){
      case "sport": 
        return axios.get(`http://localhost/back/api/getMenuSport.php`)
          .then(res => {
            const data = res.data.records;
            this.setState({ data });
          }).catch(res => console.log("Err: ", res));
      case "usual":
        return axios.get(`http://localhost/back/api/getMenuUsuall.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      case "ill":
        return axios.get(`http://localhost/back/api/getMenuIll.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      case "berem":
        return axios.get(`http://localhost/back/api/getMenuBerem.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      case "diet":
        return axios.get(`http://localhost/back/api/getMenuDiet.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      
    }
}
      render() {
        const { data } = this.state;
        const { history } = this.props;
        return (
          <div>
            <Header>
              <Button onClick={() => history.goBack()}><Icon type="left" />Назад</Button>
              <h2 style={{ marginLeft: 350 }}>Наши меню</h2>
            </Header>
            <Table
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              columns={columns}
              dataSource={this.state.data}
              pagination={false}
            />
          </div>
        );
      }
}


export default Menus;