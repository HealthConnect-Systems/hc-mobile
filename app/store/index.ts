import { configureStore } from '@reduxjs/toolkit' 
import { topicReducer } from './reducers/topicReducer'

export default configureStore({
  reducer: {
    topics: topicReducer,
  }
})