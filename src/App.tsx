import Router  from "./components/Router"
import Route  from "./components/Route";
import Root from "./pages/Root";
import About from "./pages/About";

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