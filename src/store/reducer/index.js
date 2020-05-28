import {combineReducers} from 'redux'
import {postsReducer} from './posts'

const reducer = combineReducers({
    posts: postsReducer
})

export {reducer}

