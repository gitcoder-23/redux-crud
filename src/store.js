import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// reducer import here
import rootReducer from './reducers/index'



// actions add to contactAction.js 2nd-A

// 1st all data initialize here reducer-data
// now code is contactReducer.js



// 2nd-B initiate here single reducer
// hit the actions into reducer
// now code is contactReducer.js

// 2nd-A create-store and reducer pass here
// const store = createStore(contactReducer, composeWithDevTools())
const store = createStore(rootReducer, composeWithDevTools())

// To access store outside any components
export default store;