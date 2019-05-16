import React, { Component } from 'react';
import axios from 'axios';
import  Tamaq  from "./Tamaq";
import { Card, Col, Row, Button } from 'antd';

class RandomFood extends Component {
  componentDidMount(){
    this.fetchRandomFood();
  }
  state = {
    data: []
  }
  fetchRandomFood = () => {
    axios.get(`http://localhost/back/api/get_random_food.php`)
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
            
            {/* <Button onClick={this.fetchRandomFood}>Найти случайное блюдо</Button> */}
            
            { data.length > 0 && <Tamaq tamaq={data} history={this.props.history} />
            }
          </div>
        );
      }
      
}


export default RandomFood;