import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Table, Tag } from 'antd';

import { DayMenu } from '../components';

const { CheckableTag } = Tag;

const TagContainer = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const Checkable = styled(CheckableTag)`
  font-size: 20px;
`;

class Menus extends Component{
  state = {
    data: [],
    type: ''
  }
  

  fetchData = (type) =>{
    switch(type){
      case "sport": 
        return axios.get(`http://localhost/back/api/get_random_week_sport.php`)
          .then(res => {
            const data = res.data.records;
            this.setState({ data });
          }).catch(res => console.log("Err: ", res));
      case "usual":
        return axios.get(`http://localhost/back/api/get_random_week_usuall.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      case "ill":
        return axios.get(`http://localhost/back/api/get_random_week_ill.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      case "berem":
        return axios.get(`http://localhost/back/api/get_random_week_berem.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res));
      case "diet":
        return axios.get(`http://localhost/back/api/get_random_week_diet.php`)
        .then(res => {
          const data = res.data.records;
          this.setState({ data });
        }).catch(res => console.log("Err: ", res)); 
    }   
  }
  
  handleSport = () => {
    this.setState({ type: "sport"})
    this.fetchData("sport")
  }

  handleIll = () => {
    this.setState({ type: "ill" })
    this.fetchData("ill")
  }

  handleDiet = () => {
    this.setState({ type: "diet" })
    this.fetchData("diet")
  }

  handleUsuall = () => {
    this.setState({ type: "usual" })
    this.fetchData("usual")
  }

  handleBerem = () => {
    this.setState({ type: "berem" })
    this.fetchData("berem")
  }
      render() {
        const { data, type } = this.state;
        console.log('data', data)
        return (
          <div>
            <TagContainer>
              <Checkable checked={type==="sport"} onChange={this.handleSport}>Спортсменам</Checkable>
              <Checkable checked={type==="berem"} onChange={this.handleBerem}>Беременным</Checkable>
              <Checkable checked={type==="diet"} onChange={this.handleDiet}>Для похудения</Checkable>
              <Checkable checked={type==="usual"} onChange={this.handleUsuall}>Ежедневное</Checkable>
              <Checkable checked={type==="ill"} onChange={this.handleIll}>Для болеющих</Checkable>
            </TagContainer>
            <h2>Ваше меню на неделю</h2>
            {data.length === 0 && <h3>Выберите тип для меню</h3>}
            { data.length > 0 && <DayMenu 
              day="Понедельник" breakfast={data[0].f1_name} lunch={data[0].f2_name} dinner={data[0].f3_name} 
              breakfastId={data[0].f1_id} lunchId={data[0].f2_id} dinnerId={data[0].f3_id}
              breakfastImg={data[0].f1_img} lunchImg={data[0].f2_img} dinnerImg={data[0].f3_img} 
            />
            
            }
            { data.length > 0 && <DayMenu 
              day="Вторник" breakfast={data[0].f4_name} lunch={data[0].f5_name} dinner={data[0].f6_name} 
              breakfastId={data[0].f4_id} lunchId={data[0].f5_id} dinnerId={data[0].f6_id}
              breakfastImg={data[0].f4_img} lunchImg={data[0].f5_img} dinnerImg={data[0].f6_img} 
            />
            }
            {data.length > 0 && <DayMenu 
              day="Среда" breakfast={data[0].f7_name} lunch={data[0].f8_name} dinner={data[0].f9_name} 
              breakfastId={data[0].f7_id} lunchId={data[0].f8_id} dinnerId={data[0].f9_id}
              breakfastImg={data[0].f7_img} lunchImg={data[0].f8_img} dinnerImg={data[0].f9_img} 
            />
            }
            {data.length > 0 && <DayMenu 
              day="Четверг" breakfast={data[0].f10_name} lunch={data[0].f11_name} dinner={data[0].f12_name} 
              breakfastId={data[0].f10_id} lunchId={data[0].f11_id} dinnerId={data[0].f12_id}
              breakfastImg={data[0].f10_img} lunchImg={data[0].f11_img} dinnerImg={data[0].f12_img} 
            />
            }
            {data.length > 0 && <DayMenu 
              day="Пятница" breakfast={data[0].f13_name} lunch={data[0].f14_name} dinner={data[0].f15_name} 
              breakfastId={data[0].f13_id} lunchId={data[0].f14_id} dinnerId={data[0].f15_id}
              breakfastImg={data[0].f13_img} lunchImg={data[0].f14_img} dinnerImg={data[0].f15_img} 
            />
            }
            {data.length > 0 && <DayMenu 
              day="Суббота" breakfast={data[0].f16_name} lunch={data[0].f17_name} dinner={data[0].f18_name} 
              breakfastId={data[0].f16_id} lunchId={data[0].f17_id} dinnerId={data[0].f18_id}
              breakfastImg={data[0].f16_img} lunchImg={data[0].f17_img} dinnerImg={data[0].f18_img} 
            />
            }
            {data.length > 0 && <DayMenu 
              day="Воскресенье" breakfast={data[0].f19_name} lunch={data[0].f20_name} dinner={data[0].f21_name} 
              breakfastId={data[0].f19_id} lunchId={data[0].f20_id} dinnerId={data[0].f21_id}
              breakfastImg={data[0].f19_img} lunchImg={data[0].f20_img} dinnerImg={data[0].f21_img} 
            />
            }
          </div>
        );
      }
}


export default Menus;