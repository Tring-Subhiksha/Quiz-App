import React from "react"
import './App.css';
import Signup from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./components/Signin";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import Play from './components/Play';
import Start from "./components/Start"
import Result from "./components/Result"
function App() {
  return (
    <div className="App">
      {/* <h1>Firebase Auth context</h1> */}
      <div className="login-container">
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route exact path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path="/play" element={<Play/>}></Route>
              <Route path="/start" element={<Start/>}></Route>
              <Route path="/result" element={<Result/>}/>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
