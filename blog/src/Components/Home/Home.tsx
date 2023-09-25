import {useDispatch} from 'react-redux'
import { authActions } from '../../Store/AuthSlice';

function Home() {
  const dispatch = useDispatch();

  const loginHandler = (event: any) => {
    event.preventDefault();

    dispatch(authActions.login());
  }
  return (
    <>
      <div>Home</div>
      <button onClick={loginHandler}>login</button>
    </>
  )
}

export default Home