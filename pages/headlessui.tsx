import Layout from '../components/Layout';
import Dropdown from '../components/HeadlessUI/Dropdown';

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
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2">
            Second Element - Listbox
          </div>
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2">
            Third Element - Switch (Toggle)
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default headlessui;
