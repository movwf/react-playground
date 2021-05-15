import SidebarItem from './SidebarItem';

function Sidebar() {
  return (
    <nav
      aria-label="side bar"
      aria-orientation="vertical"
      className="w-16 h-full bg-blue-900 flex flex-col items-center text-center text-gray-300 border-r"
    >
      {/* Logo */}
      <div className="row h-16 w-full bg-blue-900 flex items-center justify-center border-r-2 border-blue-900">
        <img className="w-12 h-12" src="/logo.svg" alt="Logo" />
      </div>
      <ul>
        <SidebarItem title="Home" href="/" icon="home" />
        <SidebarItem title="State Managements" href="/states" icon="redux" />
        <SidebarItem title="Headless UI" href="/headlessui" icon="headless" />
        <SidebarItem title="Reporting" href="#reporting" icon="reporting" />
        <SidebarItem title="Admin" href="/admin" icon="admin" />
      </ul>
    </nav>
  );
}

export default Sidebar;
