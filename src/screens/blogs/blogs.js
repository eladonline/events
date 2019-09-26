import Navbar from "../../components/navbar/navbar";
import blogsList from "../../data/screens/blogs.js";
import Link from "next/link"
const parseBlogs = blogs => {
  return blogs.map(data => {
    return (
      <div
        className="blogs__card"
        style={{ backgroundImage: `url(${data.hero})` }}
        key={data.header}
      >
        <Link href={data.link}>
          <div className="overlay">
            <div className="text-container">
              <header>{data.header}</header>

              <div className="overlay__text">
                {data.text[0].sentence + ".."}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};
const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="blogs">
        <div className="grid">
          <header>
            <h2>הבלוגים שלנו</h2>
          </header>
        </div>
        <div className="grid blogs__blogs-container">
          {parseBlogs(blogsList)}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
