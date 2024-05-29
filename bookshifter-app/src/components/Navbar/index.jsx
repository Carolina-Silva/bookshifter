import { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, BookOpenIcon, ArrowDownLeftIcon  } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import Cookies from 'js-cookie';

export default function Navbar() {
    let Links = [
        { name: "Benefícios", href: "#beneficios" },
        { name: "Como funciona", href: "#funciona" },
        { name: "Depoimentos", href: "#depoimentos" },
    ];
    let [open, setOpen] = useState(false);
    let [isLoggedIn, setIsLoggedIn] = useState(false);


    const logout = () => {
        Cookies.remove('authToken');
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const authToken = Cookies.get('authToken');

        if (authToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-white' style={{ zIndex: 50 }}>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* Logo */}
                <Link to="/">
                    <div className='cursor-pointer flex items-center gap-1'>
                        <img src={logo} alt="Logo" />
                    </div>
                </Link>

                {/* Icon - Mobile */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 z-50'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                {/* Links */}
                <ul className={`md:flex md:items-center justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-1/2 transform -translate-x-1/2 md:translate-x-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold px-2 py-1 rounded'>
                            <a href={link.href} className='font-semibold text-black hover:text-buttonColor duration-500'>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Ícone de usuário na versão mobile se estiver logado */}
                    {open && isLoggedIn && (
                        <div className="md:hidden mt-4">
                            <div className="md:ml-8 md:my-0 my-7">
                                <Link to="/my-books" className="font-semibold px-2 py-1 rounded hover:text-buttonColor duration-500">
                                    <BookOpenIcon className="h-5 w-5 inline-block mr-1" /> Meus livros
                                </Link>
                            </div>
                            <div className="md:ml-8 md:my-0 my-7">
                                <Link onClick={logout} to="/" className="font-semibold px-2 py-1 rounded hover:text-buttonColor duration-500">
                                    <ArrowDownLeftIcon className="h-5 w-5 inline-block mr-1" /> Sair
                                </Link>
                            </div>
                        </div>
                    )}
                    {/* Botões "Entrar" e "Cadastrar" na versão mobile se não estiver logado */}
                    {open && !isLoggedIn && (
                        <div className="md:hidden mt-4">
                            <div className="md:ml-8 md:my-0 my-7">
                                <Link to="/login" className="font-semibold px-2 py-1 rounded hover:text-buttonColor duration-500">
                                    Entrar
                                </Link>
                            </div>
                            <div className="md:ml-8 md:my-0 my-7">
                                <Link to="/signup" className="btn bg-colorDarkGreen hover:bg-colorAccent text-white font-semibold px-4 py-1.5 rounded-xl duration-500 md:static bg-buttonColor hover:bg-secondaryColor">
                                    Cadastrar
                                </Link>
                            </div>
                        </div>
                    )}
                </ul>

                {/* Ícone de usuário na versão desktop se estiver logado */}
                {isLoggedIn && (
                    <div className="hidden md:block">
                        <Link to="/my-books" className="font-semibold text-black hover:text-buttonColor">
                            <BookOpenIcon className="h-5 w-5 inline-block mr-1" />  Meus livros
                        </Link>
                        <Link onClick={logout} to="/" className="ml-8 font-semibold text-black hover:text-buttonColor">
                            <ArrowDownLeftIcon className="h-5 w-5 inline-block mr-1" /> Sair
                        </Link>
                    </div>
                )}
                {/* Botões "Entrar" e "Cadastrar" na versão desktop se não estiver logado */}
                {!isLoggedIn && (
                    <div className="hidden md:block">
                        <Link to="/login" className="font-semibold text-black hover:text-buttonColor">
                            Entrar
                        </Link>
                        <Link to="/signup" className="btn bg-colorDarkGreen hover:bg-colorAccent text-white ml-8 font-semibold px-4 py-1.5 rounded-xl duration-500 md:static bg-buttonColor hover:bg-secondaryColor">
                            Cadastrar
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
