import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Flip, toast, ToastContainer } from "react-toastify"
import Loader from "../components/Loader"

interface LoginDTO{
  email: string
  password: string
}

const Login = () => {
  const [loginDTO, setloginDTO] = useState<LoginDTO>({
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const login = async () => {
    const res = await fetch('http://localhost:3001/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(loginDTO)
    })

    const data = await res.json()

    setIsLoading(false)

    if (!res.ok) {
      toast.error(data.error || data.message, {
        position: "bottom-center",
        autoClose: 5000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        theme: "light",
        transition: Flip,
      });

      return
    }
    
    console.log('feed')
    navigate("/", { replace: true })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setloginDTO(current => ({
      ...current,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    login()
  }

  return (
    <div className="w-full h-screen bg-sky-100 flex justify-center items-center">
      <div className="w-md px-6 py-16 bg-white shadow-lg rounded-2xl flex flex-col gap-5">
        <h1 className="text-6xl flex justify-center text-gray-800">Login</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="email" 
              id="email" 
              name="email" 

              onChange={handleChange}
              value={loginDTO.email}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="password" 
              id="password" 
              name="password" 

              onChange={handleChange}
              value={loginDTO.password}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <button 
              disabled={isLoading}
              className="w-fit py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer"
            >
              {isLoading ? (<Loader/>) : 'Login'}
            </button>
            <p>Doesn't have an account? <Link to='/signup' className="font-medium text-blue-600 hover:underline">Create one</Link></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login