import { AsyncActionCreatorBuilder } from 'typesafe-actions'
import { call, put } from 'redux-saga/effects'

import { PromiseCreatorFunction } from './types'
// type PromiseCreatorFunction<P, T> =
//   | ((payload: P) => Promise<T>)
//   | (() => Promise<T>)

// typesafe-actions 5.x.x 에서 AsyncActionCreator -> AsyncActionCreatorBuilder 로 바뀜
// https://github.com/piotrwitek/typesafe-actions/releases/tag/v5.1.0
// 단지 이름만 바뀌어있다고 하는데, 직접 사용했을 때, TRequest, TSuccess, TFailure 로 넣어주는 타입을 [TType1, TPayload1] 형태로 입력했을때
// 안받아지는 문제 발생,,
//   asyncActionCreator: AsyncActionCreatorBuilder<
//   [T1, P1],
//   [T2, P2],
//   [T3, P3]
//   >,
// 강의처럼 이렇게 넣으면 타입오류 나는데, 왜그런지 아직 잘 모름.
// 일단 AsyncActionCreatorBuilder 에서 TRequest, TSuccess, TFailure로 받아주는 타입 설명된 것 중에
// [TType1, [TPayload1, TMeta1]] 이 형식으로 받아오는 것으로 맞춰서 Meta는 안쓰니까 any로 넣어주면 타입은 맞게 들어가는 듯
// 대신 뒤에 asyncActionCreator.success, failure 함수 호출할 때 Meta 값으로 패러미터를 넣어줘야 함.
// 지금은 그냥 undefined로 넣어서 동작하도록 함. [TType1, TPayload1] 으로 받아지지 않는 문제 원인 확인해봐야 함.
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
