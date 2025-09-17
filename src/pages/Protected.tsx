import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuth: boolean;
}

const Protected = ({ isAuth }: Props) => {
  if (!isAuth) return <Navigate to='/login'/>
  else return <Outlet/>
}

export default Protected