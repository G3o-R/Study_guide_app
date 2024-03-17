import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../redux/features/userSlice';


function App() {
  const dispatch = useDispatch()
  const user = useSelector((state => state.user))
  console.log(user)

  useEffect(()=>{
    dispatch(getMe())
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
