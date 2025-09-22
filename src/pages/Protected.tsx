import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/useStore';


const Protected = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const { addData, accountID } = useUserStore()
  
  console.log(accountID)

  useEffect(() => {
    const checkSession = async() => {
      console.log('checking')
      try {
        const res = await fetch('http://localhost:3001/api/v1/auth/me', {
          method: 'GET',
          credentials: 'include'  // Para que se mande la cookie automáticamente
        })
  
        if (res.status == 200) {
          const data = await res.json()

          // Meter la data al storage de zustand
          addData(data.user.id, data.user.accountID, data.user.photoURL, data.user.username)

          setIsAuth(true)
        } else {
          setIsAuth(false)
        }
      } catch(e) {
        setIsAuth(false)
      }
    }

    if (accountID.length > 0) {
      setIsAuth(true)
    } else {
      checkSession()
    }
  }, [])

  if (isAuth === null) return (<p>Cargando</p>)

  if (!isAuth) return <Navigate to='/login'/>
  else return <Outlet/>
}

export default Protected