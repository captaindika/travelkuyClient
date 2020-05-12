import Config from '../../utils/Config'
import axios from 'axios'

export const showSchedule = (search, sortKey, sort) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat(`user/schedule?search[key]=routes.end&search[value]=${search || ''}&sort[key]=${sortKey || 'schedules.id'}&sort[value]=${sort}`))
    if(res) {
      dispatch({
        type: 'SET_SCHEDULE',
        payload: res
      })
    } else {
      console.log('there is no res')
    }
  } catch (err) {
    console.log(err)
  }
}