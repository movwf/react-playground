import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import MenuItem from './MenuItem';

interface IDropDownButton {
  buttonLabel: string;
  buttonColor: string;
  menuOrientation: string | 'left' | 'right';
  menuItems: { label: string; icon: string }[];
}

function index(props: IDropDownButton) {
  return (
    <div className="w-full text-left mt-2">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white ${props.buttonColor} rounded-md hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          {props.buttonLabel}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute ${props.menuOrientation}-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="px-1 py-1 ">
              {props.menuItems?.map((item, idx) => (
                <MenuItem key={idx} {...item} />
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default index;
