import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/24/solid';
import { removeBook } from '../../api/hooks/books';

export default function MyBookCard({ book }) {
  const handleApagarLivro = async () => {
    await removeBook(book.id);
    window.location.reload();
  };

  return (
    <div className="max-w-[300px] bg-gray-100 mt-5 p-4 rounded-md flex flex-col items-center justify-center space-y-4">
      <div className="w-full flex items-center space-x-5">
        <div className="w-24 h-34 rounded-md overflow-hidden bg-blue-100">
          <img src={book.mediumCoverUrl} alt="capa do livro" className="w-full h-full" />
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{book.title}</h3>
            <div className="flex items-center space-x-2">
              <button onClick={handleApagarLivro} className="flex p-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition-colors duration-300 ease-in-out">
                <TrashIcon className="w-6 h-6" /> Apagar livro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MyBookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mediumCoverUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
