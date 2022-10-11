import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from './contents'
import Projects from './components/Projects'
import Group from './components/Group'
import Element from './contents/Element'
import Details from './contents/Element/Details'
import Code from './contents/Element/Code'
import Validation from './contents/Element/Validation'
import BuildHistory from './contents/Element/Build'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:project_name" element={<Group/>}/>
          <Route path="/projects/:project_name/:warehouse" element={<Element/>}>
            <Route path="/projects/:project_name/:warehouse/details" element={<Details />}/>
            <Route path="/projects/:project_name/:warehouse/code" element={<Code />}/>
            <Route path="/projects/:project_name/:warehouse/validation" element={<Validation />}/>
            <Route path="/projects/:project_name/:warehouse/build-history" element={<BuildHistory />}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
