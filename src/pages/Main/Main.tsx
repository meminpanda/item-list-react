import { Outlet } from "react-router-dom";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import "./main.scss";

function MainPage() {

  return (
    <div className="main-page">
        <div className="main-page-sidebar">
            <Sidebar/>
        </div>
        <div className="main-page-content">
            <Outlet></Outlet>
        </div>
    </div>
  );
}

export default MainPage;
