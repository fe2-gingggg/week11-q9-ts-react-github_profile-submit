import { ChangeEvent, FormEvent, useState } from 'react'
import './GithubUsernameForm.css'

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void
}

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      onSubmitUsername(input)
    } else {
      setInput('')
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className="GithubUsernameForm">
      <input
        type="text"
        onChange={onChange}
        value={input}
        placeholder="Github 계정명을 입력하세요"
      />
      <button type="submit">조회</button>
    </form>
  )
}

export default GithubUsernameForm
