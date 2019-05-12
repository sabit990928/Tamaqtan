import React, { Component } from 'react';
import axios from 'axios';

import { Card, Col, Row, Button, Table, Divider, Tag  } from 'antd';

const columns = [{
  title: 'Завтрак',
  dataIndex: 'za',
  key: 'za',
}, {
  title: 'Обед',
  dataIndex: 'ob',
  key: 'ob',
}, {
  title: 'Ужин',
  dataIndex: 'uzh',
  key: 'uzh',
}, 
];
  // const menu =  this.state.data.map(
  //   menu => {
  //     key: menu.id,
  //     za: menu.f1_name,
  //     ob: menu.f2_name,
  //     uzh: menu.f3_name,
  //   }
  // )

//   const dataSo = [
//     this.state.data.map(
//       menu => {
//         key: menu.id,
//         za: menu.f1_name,
//         ob: menu.f2_name,
//         uzh: menu.f3_name,
//       }
//     )

// ];
class Menus extends Component{
  state = {
    data: []
  }

  
  componentDidMount(){
    axios.get(`http://localhost/back/api/getMenuSport.php`)
      .then(res => {
        const data = res.data.records;
        console.log("data: ", res.data.records)
        this.setState({ data });
      }).catch(res => console.log("Err: ", res))
}
      render() {
        const { data } = this.state;
        return (
          <div>
            { data.length > 0 && <div style={{ background: '#ECECEC', "fontSize": "18px", "height": "100%"}} className="card">
              <h1>Ваше меню</h1> 

              {/* <Table columns={columns} dataSource={dataSo} /> */}
              
            {
                  data.map(menu => 
                  <div style={{ "marginBottom": "20px"}}>
                    <label>Завтрак </label>
{                    menu.f1_name
      }                    <br />
    
  <label>Обед </label>
                    
                    {menu.f2_name}
                    <br />
                    <label> Ужин </label>
                  {menu.f3_name}

                    
                    </div>
                  )
            }
            </div>
            }
        </div>
        );
      }
}


export default Menus;