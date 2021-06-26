import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://pure-caverns-30093.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <section>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog._id} />
      ))}
    </section>
  );
};

export default Blogs;
