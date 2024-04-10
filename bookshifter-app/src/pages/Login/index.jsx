import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [errorText, setErrorText] = useState(null);


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/dashboard');
        // if (user) {
        //   navigate('/dashboard');
        // } else {
        //   setErrorText('Ocorreu um erro ao fazer login. Tente novamente.');
        // }
      })
      .catch((error) => {
        // Tratar erros
        if (error.code === 'auth/user-not-found') {
          setErrorText('Usuário não encontrado. Verifique seu e-mail.');
        } else if (error.code === 'auth/wrong-password') {
          setErrorText('Senha incorreta. Verifique sua senha.');
        } else {
          setErrorText('Ocorreu um erro ao fazer login. Tente novamente.');
        }
      });
  }
  

  // função de Esqueci a senha 
  async function handleForgotPassword(e) {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail.');
    } catch (error) {
      console.error('Erro ao enviar e-mail de redefinição de senha:', error);
      alert('Ocorreu um erro ao enviar o e-mail de redefinição de senha. Tente novamente.');
    }
  }
  if (loading) {
    return <p>carregando...</p>
  }
  if (user) {
    return console.log(user);
  }
  return (
    <div className="min-h-screen py-40 bg-colorLightGrey2">
     
      <div className="container mx-auto">
      <div className='lg:flex-row w-10/12 lg:w-8/12 mb-5 mx-auto'>
      {errorText && (
        <p className="text-2xl font-bold text-red-500">{errorText}</p>
      )}
      </div>
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">

          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-5">Entrar</h2>
            <p className="mb-4">
              Faça login para acessar sua conta.
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
                    className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorText(null);
                    }}
                    
                  />
                </div>
              </div>

              {/* Senha input */}
              <div className="col-span-full">
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor="password"
                    className="block text-base font-medium leading-6"
                  >
                    Senha
                  </label>
                  <div className="text-sm">
                    <button onClick={handleForgotPassword} className="font-semibold text-colorAccent2 hover:text-colorDarkGreen">Esqueceu sua senha?</button>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorText(null);
                    }}
                  />
                </div>
              </div>

              <div className="mt-5">
                <button onClick={handleSignIn} className="w-full rounded-md bg-colorMidGreen px-14 py-2 text-base font-semibold text-white shadow-sm hover:bg-colorDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorDarkGreen">Entrar</button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-colorMidGreen">
            <h1 className="text-white text-3xl mb-5">Bem-vindo!</h1>
            <div>
              <p className="text-white">Se você ainda não possui uma conta, cadastre-se{' '}
                <Link to="/signup" className="text-colorAccent3 font-semibold">
                  aqui
                </Link>{' '}
                para desfrutar de todos os recursos e benefícios exclusivos.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
