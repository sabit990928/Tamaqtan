import React, { Component } from 'react';
import axios from 'axios';

import { Table } from 'antd';

const columns = [
  { title: 'Завтрак', dataIndex: 'f1_name', key: 'name' },
  { title: 'Обед', dataIndex: 'f2_name', key: 'age' },
  { title: 'Ужин', dataIndex: 'f3_name', key: 'address' },
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
        console.log(this.props, ' props')
        return (
          <div>
            <h2>Ваше меню</h2>
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