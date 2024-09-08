import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Blog from "./Blog";
import Test from "./Test";
import UseState from "./UseState";

function App() {
  return (
    // Fragment Parent
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/createblog" element={<Create />} />
        <Route path="/test" element={<Test />} />
        <Route path="/useState" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
