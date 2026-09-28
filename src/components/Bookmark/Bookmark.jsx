import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-xl mt-4 p-4">
      <h2 className="text-[18px] font-semibold">{title}</h2>
    </div>
  );
};

export default Bookmark;
