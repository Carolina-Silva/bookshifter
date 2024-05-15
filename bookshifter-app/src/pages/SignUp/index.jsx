import { Fragment, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../../img/logo.png";
import art from "../../img/art.png";
import { useSpring, animated, config } from "react-spring";
import Modal from "../../components/Modal/index";
import loginHook from "../../hooks/Login/index";

function SignUp() {
  // Animação
  const [isHovered, setIsHovered] = useState(false);
  const props = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-10px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: config.wobbly,
  }); // Fim Animação

   // Modal
 const [modalOpen, setModalOpen] = useState(false);
 const [modalTitle, setModalTitle] = useState("Seu cadastro foi concluído com êxito!");
 const [modalTextPar, setModalTextPar] = useState("");
 const [modalSpan, setModalSpan] = useState("OBS.:");
 const [modalText, setModalText] = useState("Por favor, verifique sua caixa de entrada de e-mail para validar seu cadastro.");

 const [userForm, setUserForm] = useState();

const handleChange = (event) => {
  setUserForm({ ...userForm, [event.target.name]: event.target.value });
};
 
 const handleOpenModal = (event) => {
   event.preventDefault();
   setModalOpen(true);
 };

 const registerUser = async () => {
  const newUser = await loginHook.registerUser(userForm);

  if(newUser){
    navigate('/login');
  }

 
};

  return (
    <div className="min-h-screen py-10 bg-colorLightGrey2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="hidden lg:flex w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-baseColor">
            <h1 className="text-white text-3xl mt-16 mb-5 font-bold">
              Bem-vindo ao Bookshifter!
            </h1>
            <div>
              <p className="text-grayTextColor text-center">
                Explore uma maneira inovadora de compartilhar livros com leitores de todo o mundo. Cadastre-se agora e faça parte desta comunidade literária vibrante.
              </p>
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

          <div className="w-full lg:w-1/2 py-16 px-12">
            {/* Logo */}
            <Link to="/">
              <div className="cursor-pointer flex items-center gap-1 my-8">
                <img src={logo} alt="Logo" className="w-28" />
              </div>
            </Link>
            <h2 className="text-3xl mb-4 font-extrabold">Cadastrar</h2>
            <p className="text-black my-5 font-light">
              Já possui uma conta?{" "}
              <Link
                to="/login"
                className="text-colorAccent3 font-semibold underline hover:text-buttonColor"
              >
                Entrar agora!
              </Link>{" "}
            </p>
            <div className="mt-10 mb-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* nome: */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="firstName"
                  className="block text-base font-medium leading-6"
                >
                  Nome:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="Digite aqui"
                    className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                  />
                </div>
              </div>
              {/* sobrenome:: */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-base font-medium leading-6"
                >
                  Sobrenome:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Digite aqui"
                    className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                  />
                </div>
              </div>
            </div>
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
                  onChange={handleChange}
                  placeholder="exemplo@gmail.com"
                  className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                />
              </div>
            </div>

            {/* Senha input */}
            <div className="col-span-full">
              <label
                htmlFor="password"
                className="block text-base font-medium leading-6"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="*************"
                  className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                />
              </div>
            </div>
            <div className="mt-5">
              <button onClick={registerUser} className="w-full rounded-md bg-buttonColor px-14 py-2 text-base font-semibold text-white shadow-sm hover:bg-colorDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorDarkGreen">
                Cadastrar
              </button>
            </div>

            {/* <!-- Divider --> */}
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                ou
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
                Crie com o Google
              </a>
            </div>
            <div className="w-full">
              <a className="mb-3 flex w-full items-center justify-center rounded-xl bg-primary px-7 pb-2.5 pt-3 text-center text-base font-medium leading-normal text-blackColor border transition duration-150 ease-in-out 
bg-transparent hover:bg-baseColor hover:text-white"
                href="#!"
                role="button"
              >
                {/* <!-- Facebook --> */}
                <FaFacebookF className="mr-3 w-3" />
                Crie com o Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex-row w-10/12 lg:w-8/12 mt-5 mx-auto">
          {/* {errorText && ( 
            // <p className="text-2xl font-bold text-red-500">{errorText}</p>
          // */}
        </div>
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen} title={modalTitle} textPar={modalTextPar} span={modalSpan} text={modalText} />

    </div>
  );
}

export default SignUp;
