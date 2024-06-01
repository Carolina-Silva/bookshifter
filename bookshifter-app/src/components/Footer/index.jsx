import logo from '../../img/logo.png';

export default function Footer() {
  return (
    <footer className="w-full p-8 mt-15">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        {/* LOGO */}
        <div>
          <div>
            <img src={logo} alt="Logo"/>
            <p className="text-base	mt-9 font-normal sm:text-left">Descubra o mundo da leitura de uma forma inovadora com o Bookshifter.</p>
          </div>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a href="#" className="font-normal text-blackColor transition-colors hover:text-buttonColor focus:text-buttonColor me-4 md:me-4">Sobre nós</a>
          </li>
          <li>
            <a href="#" className="font-normal text-blackColor transition-colors hover:text-buttonColor focus:text-buttonColor me-4 md:me-4">Política de Privacidade</a>
          </li>
          <li>
            <a href="#" className="font-normal text-blackColor transition-colors hover:text-buttonColor focus:text-buttonColor me-4 md:me-4">Licença</a>
          </li>
          <li>
            <a href="#" className="font-normal text-blackColor transition-colors hover:text-buttonColor focus:text-buttonColor">Contato</a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <span className="block text-center text-blackColor font-normal">&copy; 2024</span>
    </footer>
  );
}
