import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Details from "./details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
