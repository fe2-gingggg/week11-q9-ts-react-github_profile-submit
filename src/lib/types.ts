import { AsyncActionCreatorBuilder } from 'typesafe-actions'

// typesafe-actions 5.x.x 에서 AsyncActionCreator -> AsyncActionCreatorBuilder 로 바뀜
// https://github.com/piotrwitek/typesafe-actions/releases/tag/v5.1.0
export type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>

export type AsyncState<T, E = any> = {
  loading: boolean
  data: T | null
  error: E | null
}

export type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>)
