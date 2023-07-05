import { Router, Route } from "./react-router-dom"
import Root from "./components/Root";
import About from "./components/Root";

function App() {
  return (
    <>  
      <Router>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
      </Router> 
    </>
  )
}

export default App;