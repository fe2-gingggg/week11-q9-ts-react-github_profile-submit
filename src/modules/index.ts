import { combineReducers } from 'redux'
import todos from './todos'
import github, { githubSaga } from './github'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  todos,
  github,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([githubSaga()])
}
