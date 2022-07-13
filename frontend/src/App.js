import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { AuthContext } from './context/Context';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Post } from './pages/Post';
import { Settings } from './pages/Settings';
import Write from './pages/Write';
import { Header } from './components/Header';
import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
