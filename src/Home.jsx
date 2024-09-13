import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/create-blog">Create Blogs</Link>
        </nav>
      </header>

      <h1>This is the home page.</h1>

      <div className="card-container">
        <Card
          imageSrc="src\assets\180767174_4459288410756887_4792041394727702662_n.jpg"
          title="Blog 1"
        />
        <Card imageSrc="src\assets\Adelaide C.G.jpg" title="Blog 2" />
        <Card
          imageSrc="src\assets\IMG_20210507_233451.jpg.jpg"
          title="Blog 3"
        />
      </div>
    </>
  );
}

export default Home;
