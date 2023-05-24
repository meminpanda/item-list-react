import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-header-text">Item List</span>
      </div>
      <div className="sidebar-menu">
        {/* Filters Starts */}
        <div className="sidebar-menu-title">Filters</div>
        <div className="sidebar-menu-item">All</div>
        <hr className="sidebar-menu-division" />
        {/* Navigation Starts */}
        <div className="sidebar-menu-title">Pages</div>
        <div className="sidebar-menu-item">Ingredients</div>
        <hr className="sidebar-menu-division" />
        {/* Info Starts */}
        <div className="sidebar-menu-title">Legend</div>
        <div className="sidebar-menu-info">p = Pieces</div>
        <div className="sidebar-menu-info">kg = Kilograms</div>
        <div className="sidebar-menu-info">oz = Ounces</div>
        <div className="sidebar-menu-info">L = Liters</div>
        <div className="sidebar-menu-info">ml = Mililiters</div>
        <div className="sidebar-menu-info">gm = Grams</div>
        <hr className="sidebar-menu-division" />
      </div>
    </div>
  );
}

export default Sidebar;
