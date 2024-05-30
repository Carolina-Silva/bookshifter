import { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { fetchBookById } from '../../api/hooks/books';

function BookDetails() {
  const { id } = useParams();
  // Modal
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState();
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  const navigate = useNavigate();

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBook = await fetchBookById(id);
      setBook(fetchedBook);
    };
    if(id){
      getBooks(id);
    }
  }, [id]);

  return (
    <div className="container mx-auto px-10 xl:px-40">
      <div className="flex flex-wrap xl-mt-40 items-start mt-28">
        <div className="xl:w-1/3 flex justify-center xl:justify-start">
          {book ? <img src={book.largeCoverUrl} alt="capa do livro" className="xl:w-[300px] w-[300px]" /> : ''}
        </div>

        <div className="w-full md:w-2/3 md:pl-10 max-w-xl">
          <h1 className="xl:text-4xl font-extrabold mb-8 xl:mt-4 mt-8 text-2xl md:text-3xl">
            Descrição
          </h1>
          <p className="text-1xl font-base mb-2">
            <span className="font-bold text-base">Título: </span>{book ? `${book.title}` : ''}
          </p>
          <p className="text-1xl font-base mb-2">
            <span className="font-bold text-base">Autor: </span>{book ? `${book.authors}` : ''}
          </p>
          <p className="text-1xl font-base mb-2 text-justify">
            <span className="font-bold text-base">Estado do Livro: </span>{book ? `${book.bookState}` : ''}
          </p>
          <p className="text-1xl font-base mb-2 text-justify">
            <span className="font-bold text-base">Sinopse Breve: </span>
            {book && book.description && (
              <>
                {showFullSynopsis ? book.description : `${book.description.slice(0, 100)}...`}
                {book.description.length > 100 && (
                  <button className="text-blue-500 hover:underline" onClick={toggleSynopsis}>
                    {showFullSynopsis ? "Ver menos" : "Ler mais"}
                  </button>
                )}
              </>
            )}
          </p>
          <div className="flex mt-5">
            <button
              title="Reservar o livro"
              className="bg-colorDarkGreen hover:bg-colorAccent text-white font-semibold px-10 py-1.5 
              rounded-xl duration-500 md:static bg-buttonColor hover:bg-secondaryColor flex items-center"
              onClick={() => setOpen(true)}
            >
              Reservar
            </button>
            <Link
              to="/my-books"
              title="Adicionar a lista de desejos"
              className="bg-colorDarkGreen hover:bg-colorAccent text-black font-semibold px-8 py-1.5 border border-gray-400 rounded-xl duration-500 md:static bg-transparent hover:bg-buttonColor hover:text-white ml-4 flex items-center"
            >
              Adicionar a lista de desejos
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="xl:mt-20 mt-10">
        <h2 className="xl:text-4xl font-extrabold mb-8 mt-4 text-left text-2xl md:text-3xl">
          Itens relacionados:
        </h2>
      </div> */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-8 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h2"
                          className="text-xl font-extrabold"
                        >
                          Seu livro foi reservado com sucesso!
                        </Dialog.Title>
                        <div className="mt-5">
                          <p className="text-lg">
                          Ele estará disponível para retirada por 3 dias a partir de agora. Por favor, dirija-se à Fatec selecionada dentro desse prazo para efetuar a retirada.
                          </p>
                          <p className="text-lg mt-2">Lembre-se de 
                            <span className="font-bold"> anotar o código abaixo,</span> pois será necessário apresentá-lo no momento da retirada.
                          </p>
                          <p className=" px-10 py-2 text-buttonColor font-bold mt-5 text-center rounded-xl ">COD: 78698653455</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-3
sm:mt-0 sm:w-auto  hover:bg-redColor hover:text-white"
                      onClick={() => {
                        setOpen(false)
                        navigate('/')
                      }}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default BookDetails;
