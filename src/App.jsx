import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Blog from "./Blog";
import Test from "./Test";
import UseState from "./UseState";
import LearningUseEffect from "./UseEffect";

function App() {
  return (
    // Fragment Parent
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create-blog" element={<Create />} />
        <Route path="/test" element={<Test />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-effect" element={<LearningUseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
