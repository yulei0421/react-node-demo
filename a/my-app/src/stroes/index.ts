import {createStore} from 'redux'
import reducer from '../reducer' 

// console.log(reducer)
const store=createStore(reducer)
export default store