import Config from '../../utils/Config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import {Alert} from 'react-native'

export const setLogin = (data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('user/login'), data)
    console.log(res.data)
    if (res.data.success === true) {
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({
        type: 'IS_LOGIN',
        payload: res.data,
      })
    } else {
      Alert.alert('wrong username / password')
    }
  } catch (err) {
    console.log(err)
  }
};

export const setLogout = () => async dispatch => {
  const removeToken = await AsyncStorage.removeItem('token');
  try {
    removeToken;
    dispatch({
      type: 'SET_LOGOUT',
    });
  } catch (err) {
    console.log(err)
  }
};

export const forgetPass = (username) => async dispatch => {
  const res = await axios.post(Config.APP_BACKEND.concat(`auth/forgot-password/${username}`))
  dispatch ({
    type: 'FORGET_PASS',
    payload: res.data,
  })
}

export const resetPass = (username, data) => async dispatch => {
  const res = await axios.post(Config.APP_BACKEND.concat(`auth/forgot-password/${username}`), data)
  dispatch ({
    type: 'RESET_PASS',
    payload: res.data,
  })
}

export const isRegister = (data) => async dispatc => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('auth/picture'), data)
    console.log(res.data)
    dispatch({
      type: 'SET_REGISTER',
      payload: res.data
    })
  }
  catch (err) {
    console.log(err)
  }
}