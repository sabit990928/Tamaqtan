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
    axios.get(`http://localhost/back/api/getMenuSport.php`)
      .then(res => {
        const data = res.data.records;
        this.setState({ data });
      }).catch(res => console.log("Err: ", res))
}
      render() {
        const { data } = this.state;

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