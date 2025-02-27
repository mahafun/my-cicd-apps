/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './public/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import KngHome from './pages/KngHome';
import shortener from './pages/shortenerApp';
import ArumIndex from './pages/Arum/index';

const Home = () => <h1>🏠 Home Page</h1>;
const About = () => <h1>ℹ️ About Page</h1>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/">Root</Link> | <Link to="/url-shortener">URL Shortener</Link> | <Link to="/kng-home">Kng Home</Link> | <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/kng-home" element={<KngHome />} />
        <Route path="/url-shortener" element={<shortener />} />
        <Route path="/arum-index" element={<ArumIndex />} />
        <Route path="/" element={
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
export default App