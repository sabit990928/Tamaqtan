import axios from "axios";

import { FETCH_USER, LOGOUT_USER } from './types';

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: FETCH_USER, payload: user });
}


const token = () => localStorage.getItem('token');

const headers = { headers: { Authorization: `Bearer ${token}` } };


export const loginUser = (userData, history) => dispatch => {
  axios.post(`http://localhost/back/api/login.php`, userData)  //  Bereke
  // axios.post(`http://10.27.177.21/back/api/login.php`, userData) //  library
    .then(res => {
      const newToken = res.data ? res.data.jwt : '';
      if (newToken.length > 0) {
        localStorage.setItem('token', newToken);
      }
      console.log("Data", res.data);
      history.push('/randomFood')
      return loginUserSuccess(dispatch, res.data)
    })
    .catch(res =>{
      console.log("Exception", res)
    }
    )
}

export const logoutUser = (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT_USER });
};