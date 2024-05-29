import { useState, useEffect } from "react";
import imgBooks from "../../img/imgMyBooks.png";
import { Link } from "react-router-dom";
import { fetchUserBooks } from '../../api/hooks/books';
import { AiFillPlusCircle } from "react-icons/ai";
import BookCard from "../../components/BookCard";

function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchUserBooks();
      setBooks(fetchedBooks.books);
    };

    getBooks();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="xl:mt-40 mb-16 mt-28 px-10">
          <h1 className="xl:text-5xl font-extrabold mb-8 mt-4 text-center text-3xl md:text-4xl">
            Meus livros
          </h1>
        </div>
      </div>
      <div className="h-[400px] xl:h-[300px]">
        <img
          src={imgBooks}
          alt="Imagem contendo vários livros abertos."
          className="w-full h-full object-cover"
        />
      </div>
      <section className="container mx-auto px-10 xl:px-40">
         {/* Meus livros cadastrados */}
        <div className="xl:mt-20 mt-10 flex items-center justify-between">
          <h2 className="xl:text-4xl font-extrabold mb-8 mt-4 text-left text-2xl md:text-3xl">
            Meus livros cadastrados
          </h2>
          <Link
            to="/book-registrations"
            title="Cadastrar um novo livro"
            className="bg-colorDarkGreen hover:bg-colorAccent text-white font-semibold px-4 py-1.5 rounded-xl duration-500 md:static bg-buttonColor hover:bg-secondaryColor ml-4 flex items-center"
          >
            <AiFillPlusCircle className="xl:mr-2 w-5 md:block" />
            <span className="hidden md:inline">Cadastrar um novo livro</span>
          </Link>
          
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {books.map((book, index) => (
              <BookCard key={index} imgUrl={book.mediumCoverUrl} />
            ))}
          </div>

        {/* Minha lista */}
        <div className="xl:mt-20 mt-20">
          <h2 className="xl:text-4xl font-extrabold mb-8 mt-4 text-left text-2xl md:text-3xl">
            Minha lista
          </h2>
        </div>
      </section>
    </div>
  );
}

export default MyBooks;
