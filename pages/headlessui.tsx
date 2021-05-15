import Layout from '../components/Layout';
import Dropdown from '../components/HeadlessUI/Dropdown';
import Listbox from '../components/HeadlessUI/Listbox';
import Disclosure from '../components/HeadlessUI/Disclosure';

const temp = {
  dropdown: {
    buttonLabel: 'Options',
    buttonColor: 'bg-green-700',
    menuOrientation: 'left',
    menuItems: [
      {
        label: 'Test',
        icon: 'check'
        // Callbacks
      },
      {
        label: 'Test 2',
        icon: 'check'
      }
    ]
  },
  listbox: {
    people: [
      { name: 'Wade Cooper' },
      { name: 'Arlene Mccoy' },
      { name: 'Devon Webb' },
      { name: 'Tom Cook' },
      { name: 'Tanya Fox' },
      { name: 'Hellen Schmidt' }
    ]
  },
  disclosure: {
    items: [
      {
        label: 'What is your refund policy?',
        desc: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
      },
      { label: 'Do you offer technical support?', desc: 'No.' }
    ]
  }
};

function headlessui() {
  return (
    <Layout>
      <div className="flex flex-col h-full w-full border">
        <div className="row flex flex-row h-1/3">
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 flex flex-col">
            <span className="row">First Element - Dropdown Menu</span>
            <div className="row">
              <Dropdown {...temp.dropdown} />
            </div>
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 flex flex-col">
            Second Element - Listbox
            <div className="row">
              <Listbox {...temp.listbox} />
            </div>
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2">
            Third Element - Disclosure
            <div className="row">
              <Disclosure {...temp.disclosure} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default headlessui;
