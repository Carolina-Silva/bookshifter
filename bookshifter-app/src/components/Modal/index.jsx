import React, { Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({ title, textPar, span, text, open, setOpen, children }) {
  return (
    <div>
      <Transition.Root show={open} as={Fragment} style={{ zIndex: 80 }}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-8 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-5 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h2"
                          className="text-xl font-extrabold text-center"
                        >
                          {title}
                        </Dialog.Title>
                        <div className="mt-5">
                          <p className="text-lg text-justify mb-2">{textPar}</p>
                          <p className="text-lg">
                            <b>{span}</b> {text}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Renderiza os componentes filhos aqui */}
                    <div className="mt-5">
                      {children}
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
hover:bg-gray-50 sm:mt-0 sm:w-auto hover:bg-buttonColor hover:bg-redColor hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      Fechar
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
