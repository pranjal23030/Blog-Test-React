import { Link } from "react-router-dom";
import "./Home.css"; // Shared CSS

function Create() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/createblog">Create Blog</Link>
        </nav>
      </header>

      <h1>Create a Blog</h1>
      <form className="create-form">
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Subtitle:
          <input type="text" name="subtitle" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <label>
          Upload Image:
          <input type="file" name="image" />
        </label>
        <button type="submit">Create Blog</button>
      </form>
    </>
  );
}

export default Create;
