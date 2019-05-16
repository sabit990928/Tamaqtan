import React, { Component } from 'react';
import axios from 'axios';
import  {Tamaq}  from "../components";

class OneFood extends Component {
  componentDidMount(){
    this.fetchRandomFood();
  }
  state = {
    data: []
  }
  fetchRandomFood = () => {
    const { match, history } = this.props
    axios.get(`http://localhost/back/api/readOne.php?id=${match.params.id}`)
      .then(res => {
        const data = res.data.records;
        console.log("data: ", res.data.records)
        this.setState({ data });
      }).catch(res => console.log("Err: ", res))
  }
      render() {
        console.log('param', this.props.match)
        const { history } = this.props
        const { data } = this.state;
        return (
          <div>
            {
                data.length > 0 && <Tamaq tamaq={data} history={history} />
            }
          </div>
        );
      }
      
}


export default OneFood;