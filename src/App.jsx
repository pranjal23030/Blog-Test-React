import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Blog from "./Blog";

function App() {
  return (
    // Fragment Parent
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/createblog" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
