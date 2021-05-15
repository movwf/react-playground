import Sidebar from './parts/Sidebar';
import Topbar from './parts/Topbar';

function Layout({ children }) {
  return (
    <div className="antialised w-screen h-screen flex flex-row">
      {/* Sidebar */}
      <div className="z-53 col h-full w-16 flex flex-row bg-gray-100 fixed">
        <Sidebar />
      </div>
      {/* Top Bar & Content */}
      <div className="col h-full w-topbar flex flex-col">
        {/* Top Bar */}
        <Topbar />
        {/* Content */}
        <div className="z-25 row w-full h-screen bg-gray-100 flex flex-col ml-16 mt-16 pr-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
