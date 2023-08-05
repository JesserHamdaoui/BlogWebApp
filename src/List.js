import { Link } from "react-router-dom";

const List = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="list">
      <h2 className="title">{title}</h2>
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`}>
          <div className="item" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>by {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
