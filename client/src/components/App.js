import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


function App() {
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
