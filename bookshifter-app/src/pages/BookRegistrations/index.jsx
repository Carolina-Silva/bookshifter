import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Map from '../../components/Map';
import Modal from "../../components/Modal/index";
import { createBook } from '../../api/hooks/books';
import Alert from '../../components/Alert';

function BookRegistrations() {
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Seu livro foi cadastrado com sucesso!");
  const [modalTextPar, setModalTextPar] = useState("Agradecemos imensamente sua colaboração em cadastrar um livro, tornando-o acessível para que outros possam absorver conhecimento. Sua contribuição é muito valorizada.");
  const [modalSpan, setModalSpan] = useState("OBS.:");
  const [modalText, setModalText] = useState("Lembramos que é importante levar os livros até a Fatec o mais breve possível");

  const [allFatecs, setAllFatecs] = useState([
    {
      "id": 1,
      "name": "Fatec Diadema",
      "street": "Avenida Luiz Merenda",
      "neighborhood": "Campanário",
      "city": "Diadema",
      "latitude": -23.673550901220686, 
      "longitude": -46.618919415565415
    },
    {
      "id": 2,
      "name": "Fatec Ferraz de Vasconcelos",
      "street": "Rua Professor Engenheiro Claúdio Abrahão",
      "neighborhood": "Jardim São João",
      "city": "Ferraz de Vasconcelos",
      "latitude": -23.530695992538483, 
      "longitude": -46.36890409271676
    },
    {
      "id": 3,
      "name": "Fatec Guarulhos",
      "street": "Rua Cristobal Claudio Elillo",
      "neighborhood": "Parque Cecap",
      "city": "Guarulhos",
      "latitude": -23.45478157372945,
      "longitude": -46.50147515594536
    },
    {
      "id": 4,
      "name": "Fatec Carapicuíba",
      "street": "Avenida Francisco Pignatari",
      "neighborhood": "Vila Gustavo Correia",
      "city": "Carapicuíba",
      "latitude": -23.517328419575716, 
      "longitude": -46.83560725858099
    },
    {
      "id": 5,
      "name": "Fatec Mauá",
      "street": "Avenida Capitão João",
      "neighborhood": "Matriz",
      "city": "Mauá",
      "latitude": -23.6636149808426, 
      "longitude": -46.4601205310192
    },
    {
      "id": 6,
      "name": "Fatec Osasco",
      "street": "Rua Pedro Rissatto",
      "neighborhood": "Remédios",
      "city": "Osasco",
      "latitude": -23.52267186213469,
      "longitude":  -46.75916720707256
    },
    {
      "id": 7,
      "name": "Fatec Santo André",
      "street": "Rua Prefeito Justino Paixão",
      "neighborhood": "Centro",
      "city": "Santo André",
      "latitude": -23.66065171465236, 
      "longitude": -46.5304584375464
    }
  ]);
  const [bookForm, setBookForm] = useState();
  const [alertMessage, setAlertMessage] = useState(null);
  const [isbn, setIsbn] = useState();
  const [fatecId, setFatecId] = useState();
  const [latitude, setLatitude] = useState(-23.55052);
  const [longitude, setLongitude] = useState(-46.633308);
  const [name, setName] = useState('Fatec São Paulo');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setBookForm({ ...bookForm, [event.target.name]: event.target.value });
  };

  const handleOpenModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleFatecChange = (event) => {
    const selectedFatec = allFatecs.find(fatec => fatec.id === parseInt(event.target.value));
    if (selectedFatec) {
      setFatecId(selectedFatec.id);
      setLatitude(selectedFatec.latitude);
      setLongitude(selectedFatec.longitude);
      setName(selectedFatec.name);
    }
  };

  const registerBook = async (e) => {
    e.preventDefault();
    const book = await createBook(bookForm, isbn, fatecId);
    console.log(book)
      handleOpenModal(e)
  };

  const handleNewDonation = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <Alert message={alertMessage} />
      <div className="container mx-auto px-10">
      <form>
      <div className="space-y-12 xl:my-40 my-32">
        <h1 className="xl:text-5xl font-extrabold mb-4 mt-4 text-3xl text-center xl:text-left md:text-4xl md:text-left">
          Doar um livro
        </h1>
        <div className="border-gray-900/10 flex flex-col xl:flex-row items-center xl:items-start">
          <div className="flex-1">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="isbnCodigo"
                  className="block text-base font-medium leading-6"
                >
                  ISBN
                </label>
                <div className="mt-2">
                  <input
                    onChange={(event) => setIsbn(event.target.value)}
                    type="text"
                    id="isbnCodigo"
                    name="isbnCodigo"
                    placeholder="xxx-xx-xxx-xxxx-x"
                    className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="bookState"
                  className="block text-base font-medium leading-6"
                >
                  Estado do livro
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleChange}
                    id="bookState"
                    name="bookState"
                    autoComplete="bookState"
                    className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-borderColor sm:text-sm sm:leading-6 bg-bgColor"
                  >
                    <option>Pouco Usado</option>
                    <option>Usado - Aceitável</option>
                    <option>Usado - Com marcas de uso</option>
                    <option>Novo</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="fatecDestino"
                  className="block text-base font-medium leading-6"
                >
                  Fatec de destino
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleFatecChange}
                    id="fatecDestino"
                    name="fatecDestino"
                    autoComplete="fatecDestino"
                    className="p-2 block w-full rounded-md border-0 py-1.8 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-borderColor w-full sm:text-sm sm:leading-6 bg-bgColor"
                  >
                    <option value="">Selecione a Fatec</option>
                    {allFatecs.map((fatec) => (
                      <option key={fatec.id} value={fatec.id}>
                        {fatec.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 xl:ml-10 w-full xl:w-1/2 max-h-0.5">
             <Map latitude={latitude} longitude={longitude} name={name} />
          </div>
        </div>
        <button
          className="bg-buttonColor text-white xl:mt-1 py-2 px-4 rounded-md mb-5 w-full xl:w-auto md:px-16 hover:bg-secondaryColor"
          onClick={registerBook}
        >
          Cadastrar
        </button>
      </div>
    </form>
        <Modal open={modalOpen} setOpen={setModalOpen} title={modalTitle} textPar={modalTextPar} span={modalSpan} text={modalText}>
        <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNewDonation}
            >
              Doar Novo Livro
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleGoHome}
            >
              Voltar para Home
            </button>
          </div>

    
        </Modal>
      </div>
    </>
  );
}

export default BookRegistrations;
