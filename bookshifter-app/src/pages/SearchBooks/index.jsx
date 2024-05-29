import {useState, useEffect} from "react";
import imgSearch from "../../img/imgSearch.png";
import { BsSearch } from "react-icons/bs";
import { fetchAllBooks } from '../../api/hooks/books';
import BookCard from "../../components/BookCard";

function SearchBooks() {
  const [books, setBooks] = useState(null);


  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchAllBooks();
      setBooks(fetchedBooks);
    };

    getBooks();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="xl:mt-40 mb-16 mt-28 px-10">
          <h1 className="xl:text-5xl font-extrabold mb-8 mt-4 text-center text-3xl md:text-4xl">
            Pesquise livros
          </h1>
          <p className="text-1xl font-base text-center">
            Explore nossos livros doados e encontre um para adicionar a sua lista, em diversos gêneros e temas.
          </p>
        </div>
      </div>
      {/* Pesquisar - botão */}

      <div className="relative h-[300px] xl:h-[400px]">
        <form className="xl:max-w-4xl md:max-w-2xl max-w-sm mx-auto relative z-10">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <BsSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Digite aqui..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-buttonColor hover:bg-secondaryColor focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            >
              Pesquisar
            </button>
          </div>
        </form>
        <div
          className="absolute top-7 w-full xl:h-[350px] h-[450px] z-0"
          style={{ marginBottom: "3rem" }}
        >
          <img
            src={imgSearch}
            alt="Dois homens e uma mulher, sentados estudando numa biblioteca, com livros na mão e na mesa."
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-10 xl:px-40">
        <div className="xl:mt-12 mt-20">
          <h2 className="xl:text-4xl font-extrabold mb-8 mt-4 text-left text-2xl md:text-3xl">
          Todos os livros
          </h2>
          {books && books.length > 0 && ( // Adicione uma verificação para garantir que books não seja null
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {books.map((book, index) => (
                <BookCard key={index} imgUrl={book.mediumCoverUrl} id={book.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBooks;
