import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface IDialog {
  buttonLabel: string;
  buttonColor: string;
  modalTitle: string;
  modalDesc: string;
  modalButtonTitle: string;
  modalButtonColor: string;
}

export default function index(props: IDialog) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Fragment>
      <div className="flex items-center justify-center h-full mt-10">
        <button
          type="button"
          onClick={openModal}
          className={`px-4 py-2 text-sm font-medium text-gray-700 ${props.buttonColor} rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          {props.buttonLabel}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {props.modalTitle}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{props.modalDesc}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 ${props.modalButtonColor} border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
                    onClick={closeModal}
                  >
                    {props.modalButtonTitle}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
}
