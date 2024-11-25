import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard/home" element={<Dashboard />} />
        </Routes>
      </Router>
      hi
    </>
  )
}

export default App
