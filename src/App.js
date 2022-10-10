import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './contents'
import Projects from './contents/Projects'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="/projects" element={<Projects />}>
            <Route />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
