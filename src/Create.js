import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuther] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, content };
    setIsLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsLoading(false);
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h2>Creat new Blog</h2>
        <label>
          Blog Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Blog Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuther(e.target.value)}
          />
        </label>
        <label>
          Blog Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        {!isLoading && (
          <input type="submit" value="Add Blog" className="button" />
        )}
        {isLoading && (
          <input type="submit" value="Adding Blog..." className="button" />
        )}
      </form>
    </div>
  );
};

export default Create;
