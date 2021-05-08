// import {
//   deprecated,
//   ActionType,
//   createAction,
//   createReducer,
// } from 'typesafe-actions'
// const { createStandardAction, createAction: createActionDep } = deprecated

// const ADD_TODO = 'todos/ADD_TODO'
// const TOGGLE_TODO = 'todos/TOGGLE_TODO'
// const REMOVE_TODO = 'todos/REMOVE_TODO'

// let nextId = 1

// // typesafe-actions 사용 x
// // export const addTodo = (text: string) => ({
// //   type: ADD_TODO,
// //   payload: {
// //     id: nextId++,
// //     text,
// //   },
// // })

// // createAction 사용(typesafe-actions 이전 버전)
// export const addTodo = createActionDep(ADD_TODO, action => (text: string) =>
//   action({
//     id: nextId++,
//     text,
//   }),
// )

// // createAction 사용(typesafe-actions 새로운 버전)
// // export const addTodo = createAction(ADD_TODO, (text: string) => ({
// //   id: nextId++,
// //   text,
// // }))()

// // typesafe-actions 사용 x
// // export const toggleTodo = (id: number) => ({
// //   type: TOGGLE_TODO,
// //   payload: id,
// // })

// // createStandardAction 사용(typesafe-actions 이전 버전)
// export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>()

// // createAction 사용(typesafe-actions 새로운 버전)
// // export const toggleTodo = createAction(TOGGLE_TODO, (id: number) => id)()

// // typesafe-actions 사용 x
// // export const removeTodo = (id: number) => ({
// //   type: REMOVE_TODO,
// //   payload: id,
// // })

// // createStandardAction 사용(typesafe-actions 이전 버전)
// export const removeTodo = createStandardAction(REMOVE_TODO)<number>()

// // createAction 사용(typesafe-actions 새로운 버전)
// // export const removeTodo = createAction(REMOVE_TODO, (id: number) => id)()

// const actions = { addTodo, toggleTodo, removeTodo }
// // type TodosAction =
// //   | ReturnType<typeof addTodo>
// //   | ReturnType<typeof removeTodo>
// //   | ReturnType<typeof toggleTodo>

// type TodosAction = ActionType<typeof actions>

// export type Todo = {
//   id: number
//   text: string
//   done: boolean
// }

// type TodosState = Todo[]

// const initialState: TodosState = []

// // typesafe-actions 사용 x
// // export default function todos(
// //   state = initialState,
// //   action: TodosAction,
// // ): TodosState {
// //   switch (action.type) {
// //     case ADD_TODO:
// //       return state.concat({
// //         id: action.payload.id,
// //         text: action.payload.text,
// //         done: false,
// //       })
// //     case TOGGLE_TODO:
// //       return state.map(todo =>
// //         todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
// //       )
// //     case REMOVE_TODO:
// //       return state.filter(todo => todo.id !== action.payload)
// //     default:
// //       return state
// //   }
// // }

// const todos = createReducer<TodosState, TodosAction>(initialState, {
//   [ADD_TODO]: (state, action) =>
//     state.concat({
//       ...action.payload,
//       done: false,
//     }),
//   [REMOVE_TODO]: (state, action) =>
//     state.filter(todo => todo.id !== action.payload),
//   [TOGGLE_TODO]: (state, action) =>
//     state.map(todo =>
//       todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
//     ),
// })

// export default todos
export {}
