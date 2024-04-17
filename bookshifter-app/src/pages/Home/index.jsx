import React from "react";
import { BsBook } from "react-icons/bs";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { HiOutlineLockOpen } from "react-icons/hi2";
import BookCarousel from "../../components/BookCarousel";
import imgHome from "../../img/img-home.png";
import imgCard from "../../img/teste.jpg";

function Home() {
  return (
    <div className="container mx-auto">
      {/* Home */}
      <section className="xl:my-40 my-20">
        <div className="xl:relative xl:h-[400px] px-10 py-5">
          <div className="xl:bg-gray-100 xl:bg-opacity-75 xl:backdrop-blur-md xl:max-w-[500px] xl:w-[550px] xl:h-[290px] xl:py-2 xl:px-10 xl:rounded-md xl:z-30 xl:absolute xl:top-[70px] xl:left-[130px] 2xl:left-[250px]">
            <h1 className="xl:text-5xl font-extrabold mb-4 mt-4 text-3xl text-center xl:text-left md:text-4xl md:text-left">
              Doe seus livros e transforme vidas
            </h1>
            <div className="xl:text-1xl font-base mb-5 text-base">
              Descubra como o Bookshifter está revolucionando a educação e o
              meio ambiente através da doação de livros.
            </div>
          <button className="bg-buttonColor text-white xl:mt-1 py-2 px-4 rounded-md mb-5 w-full sm:w-auto xl:w-auto md:px-16 hover:bg-secondaryColor">
            Doar agora
          </button>
          </div>
          <div className="xl:absolute xl:top-0 xl:left-[580px] 2xl:left-[700px] xl:w-[530px] xl:h-[380px] xl:py-2 xl:px-4 rounded-md xl:z-20">
            <img src={imgHome} alt="capa do livro" className="w-full h-full" />
          </div>
          <div className="xl:bg-secondaryColor xl:absolute xl:top-[55px] xl:left-[570px] 2xl:left-[680px] xl:w-[500px] xl:h-[350px] py-2 px-4 rounded-md z-10"></div>
        </div>
      </section>

      {/* Nossa biblioteca */}
      <section className="my-20">
        <h3 className="xl:text-5xl font-extrabold mb-8 mt-4 text-center text-3xl md:text-4xl">
          Nossa biblioteca
        </h3>
        <div className="text-1xl font-base text-center mb-8">
          Explore nossa seleção de livros para encontrar sua próxima grande
          leitura.
        </div>
        <BookCarousel imgUrl={imgCard} />
      </section>

      {/* Beneficios */}
      <section className="xl:my-20 px-10 xl:px-40">
        <span className="font-base text-buttonColor font-extrabold">
          Benefícios
        </span>
        <h2 className="xl:text-5xl font-extrabold xl:mb-16 mb-8 mt-4 text-3xl md:text-4xl">
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
              <span className="font-extrabold text-buttonColor text-4xl">
                <HiOutlineLockOpen />
              </span>
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
              <span className="font-extrabold text-buttonColor text-4xl">
                <LiaDoorOpenSolid />
              </span>
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
      <section className="px-10 xl:px-40 mt-5">
        <span className="font-base text-buttonColor font-extrabold">
          Como funciona
        </span>
        <h2 className="xl:text-5xl text-3xl font-extrabold xl:mb-16 mb-8 mt-4 md:text-4xl">Como Funciona</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor 2xl:text-6xl xl:text-5xl text-4xl">01</span>
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
              <span className="font-extrabold text-baseColor 2xl:text-6xl xl:text-5xl text-4xl">02</span>
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
              <span className="font-extrabold text-baseColor 2xl:text-6xl xl:text-5xl text-4xl">03</span>
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
              <span className="font-extrabold text-baseColor 2xl:text-6xl xl:text-5xl text-4xl">04</span>
              <h3 className="text-2xl font-bold leading-none text-blackColor mt-8 mb-4">
                Reserva
              </h3>
              <p className="text-base">Escolha os livros que deseja ler.</p>
            </div>
          </div>
          <div className="sm:flex sm:w-full mb-5">
            <div>
              <span className="font-extrabold text-baseColor 2xl:text-6xl xl:text-5xl text-4xl">05</span>
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
              <span className="font-extrabold text-baseColor 2xl:text-6xl xl:text-5xl text-4xl">06</span>
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
