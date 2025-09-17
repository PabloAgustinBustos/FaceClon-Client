import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Feed from './pages/Feed'
import Protected from './pages/Protected'
import Signup from './pages/Signup'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected isAuth={true}/>,
    children: [{ element: <Feed/> }]
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/login',
    element: <Login/>
  },  
])

function App() {
  return (<RouterProvider router={router} />)
}

export default App
