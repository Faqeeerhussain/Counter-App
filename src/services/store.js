import {createStore} from 'redux'
import {rootReducer} from '../services/reducers/rootReducer'

export const store = createStore(rootReducer, {})