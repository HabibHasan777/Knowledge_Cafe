import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-gray-100 rounded-2xl my-7 border border-[#6047EC] p-4">
        <h1 className="text-2xl font-bold text-[#6047EC]">
          Spent time on read : {readingTime} min
        </h1>
      </div>
      <div className="bg-gray-100 rounded-2xl px-8 py-7">
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        <div className="">
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
