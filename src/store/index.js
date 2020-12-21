import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from '../enhancers/monitorReducers'
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers'

const middlewares = [loggerMiddleware, thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, composedEnhancers)
export default store