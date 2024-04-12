import { useState } from "react";
import { Link, } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from '../../img/logo.png';
import art from '../../img/art.png';
import { useSpring, animated, config } from 'react-spring';


function Login() {
  // Animação
  const [isHovered, setIsHovered] = useState(false);

  const props = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async next => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: config.wobbly
  }); // Fim Animação


  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto">
        {/* <div className='lg:flex-row w-10/12 lg:w-8/12 mb-5 mx-auto'> 
       {errorText && ( 
        // <p className="text-2xl font-bold text-red-500">{errorText}</p>
      // )}
       </div> */}
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 py-16 px-12">
             {/* Logo */}
            <Link to="/">
                <div className='cursor-pointer flex items-center gap-1 my-8'>
                    <img src={logo} alt="Logo" className="w-28"/>
                </div>
            </Link>
            <h2 className="text-3xl mb-5 font-extrabold">Entrar</h2>
            <p className="text-black my-5 font-light">Não tem uma conta?{" "}
              <Link to="/signup" className="text-colorAccent3 font-semibold underline hover:text-buttonColor">Crie uma agora!</Link>{" "}
            </p>
            {/* Form */}
            <form action="#">
              {/* E-mail input */}
              <div className="col-span-full mb-3">
                <label
                  htmlFor="email"
                  className="block text-base font-medium leading-6"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="exemplo@gmail.com"
                    className="p-2 block w-full rounded-xl border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Senha input */}
              <div className="col-span-full">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium leading-6"
                  >
                    Senha
                  </label>
                  <div className="text-sm">
                    <button className="font-semibold text-colorAccent2 hover:text-colorDarkGreen underline hover:text-buttonColor">
                      Esqueceu sua senha?
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*************"
                    className="p-2 block w-full rounded-xl border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-5">
                <button className="w-full rounded-xl bg-buttonColor px-14 py-2 text-base font-semibold text-white shadow-sm hover:bg-colorDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorDarkGreen">
                  Entrar
                </button>
              </div>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OU
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <div className="w-full">
                <a className="mb-3 flex w-full items-center justify-center rounded-xl bg-primary px-7 pb-2.5 pt-3 text-center text-base font-medium leading-normal text-blackColor 
                  border transition duration-150 ease-in-out bg-transparent hover:bg-baseColor hover:text-white"
                  href="#!"
                  role="button"
                >
                  {/* <!-- Google --> */}
                  <FaGoogle className="mr-4 w-3" />
                  Continue com Google
                </a>
              </div>
              <div className="w-full">
                <a className="mb-3 flex w-full items-center justify-center rounded-xl bg-primary px-7 pb-2.5 pt-3 text-center text-base font-medium leading-normal text-blackColor border transition duration-150 ease-in-out bg-transparent hover:bg-baseColor hover:text-white"
                  href="#!"
                  role="button"
                >
                  {/* <!-- Facebook --> */}
                  <FaFacebookF className="mr-3 w-3" />
                  Continue com Facebook
                </a>
              </div>
            </form>
          </div>
          <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-baseColor">
            <h1 className="text-white text-3xl mt-16 mb-5 font-bold">Bem-vindo ao Bookshifter!</h1>
            <div>
              <p className="text-grayTextColor text-center">Descubra uma nova forma de adquiri livros com leitores diversos. Junte-se à nossa comunidade hoje e viva uma experiência literária única.</p>
            </div>
            {/* Imagem com animação */}
            <animated.div style={props}>
              <img 
                src={art} 
                alt="Uma menina no centro, com celular não mão. Aparecendo notificações no celular."
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
