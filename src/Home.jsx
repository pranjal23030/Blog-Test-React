import { Link } from "react-router-dom";
import "./Home.css";

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
      <div className="card-container">
        <div className="card">
          <img src="path-to-image1.jpg" alt="Image 1" />
          <p>Blog 1</p>
        </div>
        <div className="card">
          <img src="path-to-image2.jpg" alt="Image 2" />
          <p>Blog 2</p>
        </div>
        <div className="card">
          <img src="path-to-image3.jpg" alt="Image 3" />
          <p>Blog 3</p>
        </div>
      </div>
    </>
  );
}

export default Home;
