import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  const { title, cover, authorImg, author, postedDate, readingTime, hashtags } =
    blog;
  return (
    <div className="mb-5">
      <img src={cover} alt={`cover for ${cover}`} />
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
          <button className="text-black">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold my-3">{title}</h2>
      <p className="flex gap-3 text-gray-400 mb-3">
        {hashtags.map((hash) => (
          <span className="">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <a className="font-semibold text-[20px] text-[#6047EC]" href="">
        Mark as read
      </a>
    </div>
  );
};

export default Blog;
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
