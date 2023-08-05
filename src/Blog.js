import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(history.push("/"));
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {blog && (
        <article className="blog">
          <h2 className="title">{blog.title}</h2>
          <p className="author">{blog.author}</p>
          <button onClick={handleDelete}>Delete Blog</button>
          <p className="content">{blog.content}</p>
        </article>
      )}
    </div>
  );
};

export default Blog;
