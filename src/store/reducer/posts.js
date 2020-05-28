import {posts} from "../../assets/posts.js"

const INITIAL_STATE = [...posts]

const postsReducer = (state = INITIAL_STATE, action) => {
    return state
}

export {postsReducer}