import { Typography } from "@material-tailwind/react";
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'
export default function Footer() {
  return (
    <footer className="w-full bg-colorMidGreen p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-colorMidGreen text-center md:justify-between">
        {/* LOGO */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <CursorArrowRaysIcon className='w-7 h-7 text-white' />
          <span className="text-white">NoPonto</span>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-colorGreen focus:text-colorGreen"
            >
              Sobre
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-colorGreen focus:text-colorGreen"
            >
              Licença
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-colorGreen focus:text-colorGreen"
            >
              Contato
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center text-white font-normal">
        &copy; 2023
      </Typography>
    </footer>
  );
}
