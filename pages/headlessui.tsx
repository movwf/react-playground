import Layout from '../components/Layout';
import Dropdown from '../components/HeadlessUI/Dropdown';
import Listbox from '../components/HeadlessUI/Listbox';
import Disclosure from '../components/HeadlessUI/Disclosure';
import Dialog from '../components/HeadlessUI/Dialog';
import Popover from '../components/HeadlessUI/Popover';
import RadioGroup from '../components/HeadlessUI/RadioGroup';

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
  },
  dialog: {
    buttonLabel: 'Open Modal',
    buttonColor: 'bg-green-300',
    modalTitle: 'Payment Successful',
    modalDesc:
      'Your payment has been successfully submitted. We’ve sent your an email with all of the details of your order.',
    modalButtonTitle: 'Got it, thanks',
    modalButtonColor: 'bg-blue-200'
  },
  popover: {
    solutions: [
      {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##',
        icon: 'IconOne'
      },
      {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##',
        icon: 'IconTwo'
      },
      {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
        icon: 'IconThree'
      }
    ]
  }
};

function headlessui() {
  return (
    <Layout>
      <div className="flex flex-col h-full w-full border">
        <div className="row flex flex-row h-1/3">
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 flex flex-col bg-white">
            <span className="row">First Element - Dropdown Menu</span>
            <div className="row">
              <Dropdown {...temp.dropdown} />
            </div>
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 flex flex-col bg-white">
            Second Element - Listbox
            <div className="row">
              <Listbox {...temp.listbox} />
            </div>
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 bg-white">
            Third Element - Disclosure
            <div className="row">
              <Disclosure {...temp.disclosure} />
            </div>
          </div>
        </div>
        <div className="row flex flex-row h-1/3 mt-3">
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 flex flex-col bg-white">
            <span className="row">Forth Element - Dialog (Modal)</span>
            <div className="row">
              <Dialog {...temp.dialog} />
            </div>
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 flex flex-col bg-white">
            Fifth Element - Popover
            <div className="row">
              <Popover {...temp.popover} />
            </div>
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2 bg-white">
            Sixth Element - Radio Group - Buggy
            <div className="row">
              <RadioGroup />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default headlessui;
