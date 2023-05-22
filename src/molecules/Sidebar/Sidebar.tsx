import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-header-text">Item List</span>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-title">Filters</div>
        <div className="sidebar-menu-item">All</div>
        <hr className="sidebar-menu-division" />
        <div className="sidebar-menu-title">Pages</div>
        <div className="sidebar-menu-item">Ingredients</div>
        <hr className="sidebar-menu-division" />
      </div>
    </div>
  );
}

export default Sidebar;
