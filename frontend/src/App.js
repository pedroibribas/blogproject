import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Context } from './context/Context';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';
import './styles/global.scss';

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Home /> : <Login />}
          />
          <Route
            path="/write"
            element={user ? <Write /> : <Register />}
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
