import { useState } from 'react'

import './styles/login.css'
import './styles/quiz-box.css'
import './styles/quiz-result.css'
import './App.css'
import Quiz from './quiz'
import Login from './login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/quizbox" element={<Quiz/>}/>
        </Routes>
       
      </div>
    </Router>
    </>
  )
}

export default App
