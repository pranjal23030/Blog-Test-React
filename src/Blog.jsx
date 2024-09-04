import { Link } from "react-router-dom";
import "./Home.css"; // You can share the same CSS for consistency

function Blog() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/createblog">Create Blog</Link>
        </nav>
      </header>

      <div className="blog-container">
        <img src="path-to-image.jpg" alt="Blog Image" className="blog-image" />
        <h2>Blog Title</h2>
        <h3>Blog Subtitle</h3>
        <p>Blog Description</p>
      </div>
    </>
  );
}

export default Blog;
