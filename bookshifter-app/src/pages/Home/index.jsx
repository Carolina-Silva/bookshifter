import React from "react";
import { BsBook } from "react-icons/bs";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { HiOutlineLockOpen } from "react-icons/hi2";

function Home() {
  return (
    <div className="container mx-auto px-2 my-40">
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
