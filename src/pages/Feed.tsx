import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useStore"

const Feed = () => {
  const {username, clean} = useUserStore()
  const navigate = useNavigate()

  const logout = async() => {
    await fetch('http://localhost:3001/api/v1/auth/logout', {
      method: 'POST',
      credentials: 'include'
    })
    
    clean()
    navigate('/login')
  }

  return (
    <main className="w-full h-screen flex flex-col gap-5 items-center justify-center bg-sky-100">
      <h1 className="text-6xl">Welcome {username}</h1>

      <section>
        <div className="flex gap-5">
          <h2>Search users</h2>
          <input className="border bg-white" type="text" />
        </div>
      </section>

      <button onClick={logout} className="w-fit py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer">Logout</button>
    </main>
  )
}

export default Feed