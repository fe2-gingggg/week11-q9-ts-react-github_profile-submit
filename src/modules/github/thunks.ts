// import { ThunkAction } from "redux-thunk"
// import { RootState } from ".."
// import { GithubAction } from "./types"

// import { Dispatch } from 'redux'

import { getUserProfile } from '../../api/github'
import createAsyncThunk from '../../lib/createAsyncThunc'
import { getUserProfileAsync } from './actions'

// export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
//     return async (dispatch, getState) => {}
// }

// export function getUserProfileThunk(username: string) {
//   return async (dispatch: Dispatch) => {
//     const { request, success, failure } = getUserProfileAsync
//     dispatch(request(undefined))
//     try {
//       const userProfile = await getUserProfile(username)
//       dispatch(success(userProfile))
//     } catch (error) {
//       dispatch(failure(error))
//     }
//   }
// }
export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile,
)
