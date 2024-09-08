import { Link } from "react-router-dom";
import "./Home.css";
import Button from "./Button";
import Card from "./Card";

function Home() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/createblog">Create Blogs</Link>
        </nav>
      </header>

      <h1>This is the home page.</h1>

      <Button text="Test Button" />
      <Button text="T1 Button" />

      <div className="card-container">
        <Card imageSrc="#" title="Blog 1" />
        <Card imageSrc="#" title="Blog 2" />
        <Card imageSrc="#" title="Blog 3" />
      </div>
    </>
  );
}

export default Home;
