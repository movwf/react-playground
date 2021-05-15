import Layout from '../components/Layout';

function headlessui() {
  return (
    <Layout>
      <div className="flex flex-col h-full w-full border">
        <div className="row flex flex-row h-1/3">
          <div className="col h-full w-1/3 border-2 rounded-2xl p-3 m-2">
            First Element - Dropdown Menu
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
