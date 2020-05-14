import axios from 'axios'
import Config from '../../utils/Config'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } catch (err) {
    console.log(err)
  }
}
getToken()

export const UserDetail = () => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat('user/detail'))
  console.log('ini res', res)
  try {
    dispatch ({
      type: 'GET_USERDETAIL',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const TopUp = (data) => async dispatch => {
  const res = await axios.patch(Config.APP_BACKEND.concat('user/topup'), data)
  try {
    dispatch ({
      type: 'TOPUP',
      payload: res.data
    })
  } catch(err) {
    console.log(err)
  }
}

export const createTransaction = (data) => async dispatch => {
  const res = await axios.post(Config.APP_BACKEND.concat('user/transaction/add'), data)
  try {
    dispatch ({
      type: 'ADD_TRANS',
      payload: res.data
    })
  } catch(err) {
    Alert.alert(errr)
  }
}

export const Indomaret = (data) => async dispatch => {
  try {
    const res = await axios.post('https://api.sandbox.midtrans.com/v2/charge', JSON.stringify(data) ,{
      headers : { 'Content-Type': 'application/json', Accept:'application/json', Authorization: 'Basic U0ItTWlkLXNlcnZlci14aUtaLTUycDkzNUhQVkk4X1QzMWZHcjQ6' }
    })
    console.log(res)
    if (res) {
      dispatch({
        type: 'INDOMARET',
        payload: res.data
      })
    } else {
      console.log('transaction failed')
    } 
  } catch (err) {
    console.log(err)
  }
}

export const ValidationPayment = (order_id) => async dispatch => {
  try {
    const res = await axios.get(`https://api.sandbox.midtrans.com/v2/${order_id}/status`, {
      headers : { 'Content-Type': 'application/json', Accept:'application/json', Authorization: 'Basic U0ItTWlkLXNlcnZlci14aUtaLTUycDkzNUhQVkk4X1QzMWZHcjQ6' }
    })
    console.log(res)
    if (res) {
      dispatch ({
        type: 'VALIDATION',
        payload: res.data
      })
    } else {
      console.log('validation failed')
    }
  } catch (err) {
    console.log(err)
  }
}

export const CreatePayment = (data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('user/payment'), data)
    if (res) {
      dispatch({
        type: 'CREATE_PAYMENT',
        payload: res.data
      })
    } else {
      Alert.alert('Failed to pay')
    }
  } catch (err) {
    console.log(err)
  }
}

export const GetPayment = () => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat('user/history'))
    if (res) {
      dispatch ({
        type: 'HISTORY_PAYMENT',
        payload: res.data
      })
    } else {
      Alert.alert('Dont have any payment')
    }
  } catch (err) {
      console.log(err)
    }
  }


export const GetPaymentById = (id) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat(`user/order/${id}`))
    if (res) {
      dispatch ({
        type: 'GET_ORDERID',
        payload: res.data
      })
    } else {
      Alert.alert('dont have any payment')
    }
  } catch (err) {
    console.log(err)
  }
}

export const UpdatePayment = (id) => async dispatch => {
  try {
    const res = await axios.patch(Config.APP_BACKEND.concat(`user/payment/${id}`))
    if (res) {
      dispatch({
        type: 'UPDATE_PAYMENT'
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (err) {
    console.log(err)
  }
}

export const getTransaction = (sort) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat(`user/transaction?sort[key]=transactions.created_at&sort[value]=${sort}&limit=100000`))
    if (res) {
      dispatch({
        type: 'USER_TRANSACTION',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (err) {
    console.log(err)
  }
}