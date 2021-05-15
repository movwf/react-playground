import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

interface IDisclosure {
  items: { label: string; desc: string }[];
}

export default function index(props: IDisclosure) {
  return (
    <div className="w-full pt-2">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        {props.items?.map((item, idx) => (
          <Disclosure
            key={idx}
            as="div"
            className={`${idx !== 0 ? 'mt-2' : ''}`}
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{item.label}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {item.desc}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
