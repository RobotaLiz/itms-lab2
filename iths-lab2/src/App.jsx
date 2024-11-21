import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cats from './pages/Cats';
import About from './pages/About';
import SignInPage from './pages/SignInPage';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    console.log("Inloggning lyckades");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/SignInPage" />;
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/cats" 
          element={<ProtectedRoute element={<Cats />} />} 
        />
        <Route 
          path="/about" 
          element={<ProtectedRoute element={<About />} />} 
        />
        <Route 
          path="/SignInPage" 
          element={<SignInPage onLogin={handleLogin} />} 
        />
      </Routes>
    </>
  );
}

export default App;
