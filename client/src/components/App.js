import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import SubjectContentPage from '../pages/SubjectContentPage';
import Navbar from './Navabar';


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../redux/features/userSlice';


function App() {
  const dispatch = useDispatch()
  const {user, loading} = useSelector((state => state.user))

  useEffect(()=>{
    dispatch(getMe())
  },[])

  if (loading && !user){
    return <div>loading...</div>
  } else if(!user){
    return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/sign-up" element={<Navigate to="/" />} />
          <Route path="/" element={<Home/>} />
          <Route path="/subjects" element={<Subjects/>}>
            <Route path=":serialNumber" element={<SubjectContentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
