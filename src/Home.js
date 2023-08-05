//import { useState, useEffect } from "react";
import List from "./List";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p style={{ color: "rgb(17, 163, 168)" }}>Loading..</p>}
      {blogs && <List title={"Blogs"} blogs={blogs} />}
    </div>
  );
};

export default Home;
