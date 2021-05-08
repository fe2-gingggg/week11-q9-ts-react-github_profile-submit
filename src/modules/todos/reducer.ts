import { createReducer } from 'typesafe-actions'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions'
import { TodosAction, TodosState } from './types'

const initialState: TodosState = []

// typesafe-actions 사용 x
// export default function todos(
//   state = initialState,
//   action: TodosAction,
// ): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         done: false,
//       })
//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
//       )
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload)
//     default:
//       return state
//   }
// }

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false,
    }),
  [REMOVE_TODO]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
    ),
})

export default todos
