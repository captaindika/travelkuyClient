import Config from '../../utils/Config'
import axios from 'axios'

export const showSchedule = (searchKey, search, sortKey, sort) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat(`user/schedule?search[key]=${searchKey}&search[value]=${search}&sort[key]=${sortKey}&sort[value]=${sort}`))
    dispatch({
      type: 'SET_SCHEDULE',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}