import { combineReducers } from 'redux'
import isLogin from './Auth'
import TopUp from './User/Transaction'
import Schedules from './User/Schedule'

const allReducers = combineReducers({
  isLogin, TopUp, Schedules
})

export default allReducers