import logo from '../../img/logo.png';

export default function BookCard() {
  return (
   <div className="max-w-[200px] mx-auto flex flex-col items-center justify-center">
    <div className="img w-full rounded-md overflow-hidden bg-blue-100">
      <img src={logo} alt="capa do livro" className="w-full h-full" />
    </div>
    <div className="button mt-4 border border-gray-400  w-[200px]">
      <a href="#" className="block px-4 py-2 text-center">
        Saiba mais
      </a>
    </div>
   </div>
  );
}
