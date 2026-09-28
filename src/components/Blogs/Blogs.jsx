import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmarks, totalReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 my-7">
      {blogs.map((blog) => (
        <Blog
          totalReadingTime={totalReadingTime}
          handleAddToBookmarks={handleAddToBookmarks}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func,
};
export default Blogs;
