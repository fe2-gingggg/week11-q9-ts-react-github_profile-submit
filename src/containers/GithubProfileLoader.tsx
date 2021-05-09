import { useDispatch, useSelector } from 'react-redux'
import GithubProfileInfo from '../components/GithubProfileInfo'
import GithubUsernameForm from '../components/GithubUsernameForm'
import { RootState } from '../modules'
// import { getUserProfileAsync, getUserProfileThunk } from '../modules/github'
import { getUserProfileAsync } from '../modules/github'

function GithubProfileLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile,
  )
  const dispatch = useDispatch()

  const onSubmitUsername = (username: string) => {
    // dispatch(getUserProfileThunk(username))
    dispatch(getUserProfileAsync.request(username))
  }

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading ? (
        <p style={{ textAlign: 'center' }}>로딩중</p>
      ) : error ? (
        <p style={{ textAlign: 'center' }}>에러발생</p>
      ) : data ? (
        <GithubProfileInfo
          name={data.name}
          bio={data.bio}
          blog={data.blog}
          thumbnail={data.avatar_url}
        />
      ) : null}
    </>
  )
}

export default GithubProfileLoader
