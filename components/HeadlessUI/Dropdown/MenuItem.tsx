import { Menu } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';

interface IMenuItem {
  label: string;
  icon: string;
}

const IconDefault = {
  settings: { className: 'w-5 h-5 mr-2 bg-black', 'aria-hidden': true }
};

const Icons = {
  check: <CheckIcon {...IconDefault.settings} />
};

function MenuItem(props: IMenuItem) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-green-500 text-white' : 'text-gray-900'
          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        >
          {active ? Icons[props.icon] : Icons[props.icon]}
          {props.label}
        </button>
      )}
    </Menu.Item>
  );
}

export default MenuItem;
