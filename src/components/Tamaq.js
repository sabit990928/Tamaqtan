import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px;
`;
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  width: 30%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 10px;
`;
const Image = styled.img`

  width: 100%;
  
`;

class Tamaq extends Component{
    render(){
        
        const { tamaq } = this.props;
      return (
        <Container>
           <Left>
               
                <Image src={tamaq[0].img_address}/>
           </Left>
            <Right>
                <h1>{tamaq[0].name}</h1>
                <div>
                    <h4>{tamaq[0].time_name } ~ {tamaq[0].type_name} ~ {tamaq[0].user_type_name}</h4>
                </div>
                <h2>Рецепт:</h2>  
                <p>
                  
                {tamaq[0].recept }
                </p>
               
            </Right>
         
        </Container>
            
        
      )
    }
  }
  
  export default Tamaq;