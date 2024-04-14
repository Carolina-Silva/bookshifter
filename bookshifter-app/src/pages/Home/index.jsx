import React from "react";
import { BsBook } from "react-icons/bs";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { HiOutlineLockOpen } from "react-icons/hi2";
import BookCard from "../../components/BookCard";

function Home() {
  return (
    <div className="container mx-auto px-2 my-40">
      {/* Home */}
      <section className="my-20 ">
        <div className="relative h-[400px]">
          <div className="bg-blue-100 max-w-[500px]  w-[550px] h-[250px] py-2 px-4 rounded-md z-30 absolute top-[80px] left-[250px]">
            <h1 className="text-5xl font-extrabold mb-2 mt-4">
              Doe seus livros e
              transforme vidas
            </h1>
            <div className="text-1xl font-base mb-5">
              Descubra como o Bookshifter está revolucionando a educação e o meio ambiente através da doação de livros.
            </div>
            <button className="bg-buttonColor text-white mt-1 py-2 px-4 rounded-md">
              Doar agora
            </button>
          </div>
          <div className="bg-red-300 absolute top-0 left-[700px] w-[500px] h-[350px] py-2 px-4 rounded-md z-20">
            {/* <img src={logo} alt="capa do livro" className="w-full h-full" /> */}
          </div>
          <div className="bg-orange-300 absolute top-[40px] left-[650px] w-[500px] h-[350px] py-2 px-4 rounded-md z-10"></div>
        </div>

      </section>

      {/* Nossa biblioteca */}
      <section className="my-20">
        <h3 className="text-5xl font-extrabold mb-8 mt-4 text-center">
          Nossa biblioteca
        </h3>
        <div className="text-1xl font-base text-center mb-8">
          Explore nossa seleção de livros para encontrar sua
          próxima grande leitura.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>

      {/* Beneficios */}
      <section className="my-20">
        <span className="font-base text-buttonColor font-extrabold">
          Benefícios
        </span>
        <h2 className="text-6xl font-extrabold mb-16 mt-4">
          Benefícios ao utilizar nossos serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-buttonColor text-4xl">
                <BsBook />
              </span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Diversidade de Livros
              </h3>
              <p className="text-base">
                Explore uma ampla variedade de livros disponíveis gratuitos.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-buttonColor text-4xl"><HiOutlineLockOpen /></span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Acesso Eficiente e Conveniente
              </h3>
              <p className="text-base">
                Comprometemo-nos a facilitar o acesso rápido e fácil aos livros
                que você deseja.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-buttonColor text-4xl"><LiaDoorOpenSolid /></span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Acesso Livre a Conhecimento
              </h3>
              <p className="text-base">
                Desfrute de uma ampla seleção de livros sem custo, promovendo a
                alfabetização, a educação e a preservação ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section>
        <span className="font-base text-buttonColor font-extrabold">
          Como funciona
        </span>
        <h2 className="text-6xl font-extrabold mb-16 mt-4">Como Funciona</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor text-6xl">01</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Cadastro
              </h3>
              <p className="text-base">
                Inscreva-se em nossa plataforma e crie uma conta gratuita.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor text-6xl">02</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Listagem
              </h3>
              <p className="text-base">
                Liste os livros que você deseja doar, fornecendo detalhes como
                título, autor e condição do livro.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor text-6xl">03</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Busca
              </h3>
              <p className="text-base">
                Explore a variedade de livros disponíveis em nossa comunidade.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor text-6xl">04</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Reserva
              </h3>
              <p className="text-base">Escolha os livros que deseja ler.</p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor text-6xl">05</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Localize
              </h3>
              <p className="text-base">
                Encontre em que Fatec este livro está disponivél.
              </p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor text-6xl">06</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Retirada
              </h3>
              <p className="text-base">
                Retire os livros escolhidos no local e comece a desfrutar de
                novas leituras!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
