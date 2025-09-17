import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="w-full h-screen bg-sky-100 flex justify-center items-center">
      <div className="w-md px-6 py-16 bg-white shadow-lg rounded-2xl flex flex-col gap-5">
        <h1 className="text-6xl flex justify-center text-gray-800">Sign up</h1>
        
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" name="password" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="confirmPassword" name="confirmPassword" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="w-fit py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer">Create account</button>
            <p>Already have an account? <Link to='/login' className="font-medium text-blue-600 hover:underline">Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup