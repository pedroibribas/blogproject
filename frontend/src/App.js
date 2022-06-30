import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';
import './styles/global.scss';

function App() {
  const userIsLoggedIn = true;

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={userIsLoggedIn ? <Home /> : <Register />}
          />
          <Route
            path="/login"
            element={userIsLoggedIn ? <Home /> : <Login />}
          />
          <Route
            path="/write"
            element={userIsLoggedIn ? <Write /> : <Register />}
          />
          <Route
            path="/settings"
            element={userIsLoggedIn ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
