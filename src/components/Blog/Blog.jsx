import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmarks, totalReadingTime }) => {
  const { title, cover, authorImg, author, postedDate, readingTime, hashtags } =
    blog;
  return (
    <div className="mb-5">
      <img className="rounded-2xl" src={cover} alt={`cover for ${cover}`} />
      <div className="flex justify-between mt-8">
        <div className="flex gap-6">
          <img
            className="h-[60px] w-[60px] rounded-full"
            src={authorImg}
            alt={`author img for ${authorImg}`}
          />
          <div>
            <h3 className="font-bold text-2xl">{author}</h3>
            <p className="font-semibold text-[16px] text-gray-500">
              {postedDate}
            </p>
          </div>
        </div>
        <div className="flex gap-3  items-center">
          <p className="text-[20px] text-gray-500">{readingTime} min read</p>
          <button
            onClick={() => {
              handleAddToBookmarks(blog);
            }}
            className="text-black"
          >
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold my-3">{title}</h2>
      <p className="flex gap-3 text-gray-400 mb-3">
        {hashtags.map((hash) => (
          <span key={hash}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => totalReadingTime(readingTime)}
        className="font-semibold underline text-[20px] text-[#6047EC]"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
};
