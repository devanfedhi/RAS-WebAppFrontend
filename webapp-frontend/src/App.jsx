
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { projects } from './data/Data';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {projects.map((project, index) => {
            return (
              <Route path={`/projects/${project.id}`} element={project.page} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
