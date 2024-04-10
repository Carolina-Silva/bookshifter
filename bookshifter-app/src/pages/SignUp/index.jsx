import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [errorText, setErrorText] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignOut = async (e) => {
    e.preventDefault();

    if (!email || !password || !nome || !sobrenome) {
      setErrorText('Todos os campos são obrigatórios.');
      return;
    }

    if (password.length < 6) {
      setErrorText('A senha deve conter pelo menos 6 caracteres.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(email, password, {
        displayName: `${nome} ${sobrenome}`
      });

      if (userCredential) {
        // O registro foi bem-sucedido, você pode redirecionar para a página de login ou outra ação necessária
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorText('Este e-mail já está em uso por outra conta.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorText('O e-mail informado é inválido.');
      } else {
        setErrorText('Ocorreu um erro ao criar a conta. Tente novamente.');
      }
    }
  }

  if (loading) {
    return <p>carregando...</p>
  }

  return (
    <div className="min-h-screen py-40 bg-colorLightGrey2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-colorMidGreen">
            <h1 className="text-white text-3xl mb-5">Bem-vindo!</h1>
            <div>
              <p className="text-white">Se você já possui uma conta, faça{' '}
                <Link to="/login" className="text-colorAccent3 font-semibold">
                  login
                </Link>{' '}
                agora para acessar todos os recursos e benefícios exclusivos.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Cadastre-se</h2>
            <p className="mb-4">
              Crie sua conta. É grátis e leva apenas um minuto.
            </p>
            <div className="mt-10 mb-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* nome: */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="nome"
                  className="block text-base font-medium leading-6"
                >
                  Nome:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    onChange={(e) => setNome(e.target.value)}
                    className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                  />
                </div>
              </div>
              {/* sobrenome:: */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="sobreNome"
                  className="block text-base font-medium leading-6"
                >
                  Sobrenome:
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="sobreNome"
                    name="sobreNome"
                    onChange={(e) => setSobrenome(e.target.value)}
                    className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                  />
                </div>
              </div>
            </div>
            {/* E-mail input */}
            <div className="col-span-full mb-3">
              <label
                htmlFor="contatoEmail"
                className="block text-base font-medium leading-6"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="contatoEmail"
                  name="contatoEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                />
              </div>
            </div>

            {/* Senha input */}
            <div className="col-span-full">
              <label
                htmlFor="senha"
                className="block text-base font-medium leading-6"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-5">
              <button onClick={handleSignOut} className="w-full rounded-md bg-colorMidGreen px-14 py-2 text-base font-semibold text-white shadow-sm hover:bg-colorDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorDarkGreen">Registrar</button>
            </div>
          </div>
        </div>
        <div className='lg:flex-row w-10/12 lg:w-8/12 mt-5 mx-auto'>
          {errorText && (
            <p className="text-2xl font-bold text-red-500">{errorText}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
