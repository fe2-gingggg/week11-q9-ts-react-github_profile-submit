import { ActionType } from 'typesafe-actions'
import { GithubProfile } from '../../api/github'
import { AsyncState } from '../../lib/types'
import * as actions from './actions'

export type GithubAction = ActionType<typeof actions>

// export type GithubState = {
//   userProfile: {
//     loading: boolean
//     data: GithubProfile | null
//     error: Error | null
//   }
// }
export type GithubState = {
  userProfile: AsyncState<GithubProfile, Error>
}
