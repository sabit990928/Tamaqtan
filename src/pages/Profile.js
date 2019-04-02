import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';

const Container = styled.div`
  width: 90%;
  height: 100vh;
`;

const UserInfo = styled.div`

`

const Profile = () => (
  <Container>
    <UserInfo>
      <Avatar shape="square" size="large" icon="user" />

    </UserInfo>
  </Container>
)

export default Profile;