import { deprecated, createAction } from 'typesafe-actions'
const { createStandardAction, createAction: createActionDep } = deprecated

export const ADD_TODO = 'todos/ADD_TODO'
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'
export const REMOVE_TODO = 'todos/REMOVE_TODO'

let nextId = 1

// typesafe-actions 사용 x
// export const addTodo = (text: string) => ({
//   type: ADD_TODO,
//   payload: {
//     id: nextId++,
//     text,
//   },
// })

// createAction 사용(typesafe-actions 이전 버전)
export const addTodo = createActionDep(ADD_TODO, action => (text: string) =>
  action({
    id: nextId++,
    text,
  }),
)

// createAction 사용(typesafe-actions 새로운 버전)
// export const addTodo = createAction(ADD_TODO, (text: string) => ({
//   id: nextId++,
//   text,
// }))()

// typesafe-actions 사용 x
// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// })

// createStandardAction 사용(typesafe-actions 이전 버전)
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>()

// createAction 사용(typesafe-actions 새로운 버전)
// export const toggleTodo = createAction(TOGGLE_TODO, (id: number) => id)()

// typesafe-actions 사용 x
// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id,
// })

// createStandardAction 사용(typesafe-actions 이전 버전)
export const removeTodo = createStandardAction(REMOVE_TODO)<number>()

// createAction 사용(typesafe-actions 새로운 버전)
// export const removeTodo = createAction(REMOVE_TODO, (id: number) => id)()
