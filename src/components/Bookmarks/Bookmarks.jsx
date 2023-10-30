import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks,readingTime }) => {

    return (
        <div className="md:w-1/3 bg-orange-100 ml-4 mt-2 pt-4 rounded-lg">
            <div>
                <h3 className='text-4xl text-center text-purple-600 font-bold'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarkd blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;