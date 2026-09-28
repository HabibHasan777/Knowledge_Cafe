import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const totalReadingTime = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    console.log(blog);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <main className="md:flex gap-5">
        <Blogs
          totalReadingTime={totalReadingTime}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
