import React, { Component } from 'react';
import styled from 'styled-components';
import { Avatar, Calendar } from 'antd';
import { Slider } from '../components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  width: 500px;
  height: 100px;
  background-color: #ddd;
  display: flex; 
  flex-direction: row;
  align-items: center;  
  justify-content: space-between; 
  margin: 30px; 
`;

const Label = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;

const StyledAvatar = styled(Avatar)`
  margin-left: 20px;
`;

const StyledCalendar = styled(Calendar)`
  width: 80%;
`

class ProfileContainer extends Component {

  handlePanelChange = (value, mode) => {
    console.log(value, mode);
  }

  render() {
    return (
      <Container>
        <UserInfo>
          <StyledAvatar shape="square" size="large" icon="user" />
          <Label>Нурбол Толегенов</Label>
        </UserInfo>
        <Slider />
        <StyledCalendar onPanelChange={this.handlePanelChange}></StyledCalendar>
      </Container>
    )
  }
}

export default ProfileContainer;