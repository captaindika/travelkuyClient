import { combineReducers } from 'redux'
import isLogin from './Auth'
import TopUp from './User/Transaction'
import GetSchedules from './User/Schedule'

const allReducers = combineReducers({
  isLogin, TopUp, GetSchedules
})

export default allReducers