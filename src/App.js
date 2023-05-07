import "./App.css";
import Navbar from "./componets/navbar"
import Banner from "./componets/banner"
import Middlesection from "./componets/middlesection";
import Comments from "./componets/comments";
// import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Banner />
      <Middlesection />
      <Comments/>
        
    </div>
  );
}

export default App;
