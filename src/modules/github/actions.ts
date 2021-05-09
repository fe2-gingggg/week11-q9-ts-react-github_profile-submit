import { GithubProfile } from '../../api/github'
// import { createAsyncAction, createAction, deprecated } from 'typesafe-actions'
// const {createStandardAction} = deprecated // typesafe-actions 5버전 이전 함수 사용할 때,, createAsyncAction 쓰면서 안씀
import { createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE'
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR'

// export const getUserProfile = createStandardAction(GET_USER_PROFILE)()
// export const getUserProfile = createAction(GET_USER_PROFILE)() // typesafe-actions 신규버전 사용시
// export const getUserProfileSuccess = createStandardAction(
//   GET_USER_PROFILE_SUCCESS,
// )<GithubProfile>()
// export const getUserProfileError = createStandardAction(
//   GET_USER_PROFILE_ERROR,
// )<AxiosError>()
// async 액션 생성함수 한번에 만들어주는 createAsyncAction 으로 대체

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
)<string, GithubProfile, AxiosError>()
