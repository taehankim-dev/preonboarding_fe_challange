import { Router, Route } from "./react-router-dom"
import Root from "./pages/Root";
import About from "./pages/Root";

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