
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log('Bookmarks will be added',blog);
    const newBookmarks = [...bookmarks, blog];//creating a copy cz array stores reference
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    // console.log('marking as read',time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // setReadingTime(readingTime + time); //as this is not an array it does not store reference ||short cut
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
