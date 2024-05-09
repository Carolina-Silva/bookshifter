import React, { useState } from "react";
import geo from "../../img/geo.png";
import Modal from "../../components/Modal/index";

function BookRegistrations() {
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Seu livro foi cadastrado com sucesso!");
  const [modalTextPar, setModalTextPar] = useState("Agradecemos imensamente sua colaboração em cadastrar um livro, tornando-o acessível para que outros possam absorver conhecimento. Sua contribuição é muito valorizada.");
  const [modalSpan, setModalSpan] = useState("OBS.:");
  const [modalText, setModalText] = useState("Lembramos que é importante levar os livros até a Fatec o mais breve possível");

  const handleOpenModal = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do botão
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto px-10">
      <form>
        <div className="space-y-12 xl:my-40 my-32">
          <h1 className="xl:text-5xl font-extrabold mb-4 mt-4 text-3xl text-center xl:text-left md:text-4xl md:text-left">
            Doar um livro
          </h1>
          <div className="border-gray-900/10 flex flex-col xl:flex-row items-center xl:items-start">
            <div className="flex-1">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="isbnCodigo"
                    className="block text-base font-medium leading-6"
                  >
                    ISBN
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="isbnCodigo"
                      name="isbnCodigo"
                      placeholder="xxx-xx-xxx-xxxx-x"
                      className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="estadoLivro"
                    className="block text-base font-medium leading-6"
                  >
                    Estado do livro
                  </label>
                  <div className="mt-2">
                    <select
                      id="estadoLivro"
                      name="estadoLivro"
                      autoComplete="estadoLivro"
                      className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                    >
                      <option>Pouco Usado</option>
                      <option>Usado - Aceitável</option>
                      <option>Usado - Com marcas de uso</option>
                      <option>Novo</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="fatecDestino"
                    className="block text-base font-medium leading-6"
                  >
                    Fatec de destino
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="fatecDestino"
                      id="fatecDestino"
                      autoComplete="fatecDestino"
                      className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor w-fu sm:text-sm sm:leading-6 bg-bgColor"
                      placeholder="Fatec Diadema"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0 w-full xl:w-auto">
              <img src={geo} alt="Geolocalização" className="w-full" />
            </div>
          </div>

          <button className="bg-buttonColor text-white xl:mt-1 py-2 px-4 rounded-md mb-5 w-full xl:w-auto md:px-16 hover:bg-secondaryColor" onClick={handleOpenModal}>
            Cadastrar
          </button>
        </div>
      </form>
      <Modal open={modalOpen} setOpen={setModalOpen} title={modalTitle} textPar={modalTextPar} span={modalSpan} text={modalText} />
    </div>
  );
}

export default BookRegistrations;
