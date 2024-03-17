import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../redux/features/userSlice';


function App() {
  const dispatch = useDispatch()
  const {user, loading} = useSelector((state => state.user))
  console.log(loading)

  useEffect(()=>{
    dispatch(getMe())
  },[])

  if (loading && !user){
    return <div>loading...</div>
  } else if(!user){
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/sign-up" element={<Navigate to="/" />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
