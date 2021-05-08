import { AsyncActionCreatorBuilder } from 'typesafe-actions'
import { call, put, takeEvery } from 'redux-saga/effects'

type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>)

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, [P1, any]],
    [T2, [P2, any]],
    [T3, [P3, any]]
  >,
  promiseCreator: PromiseCreatorFunction<P1, P2>,
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result: P2 = yield call(promiseCreator, action.payload)
      yield put(asyncActionCreator.success(result, undefined))
    } catch (error) {
      yield put(asyncActionCreator.failure(error, undefined))
    }
  }
}
