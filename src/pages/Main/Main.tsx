import { Outlet } from "react-router-dom";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./main.scss";

function MainPage() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f56718",
      },
      secondary: {
        main: "#EB445F"
      },
      error:{
        main: "#c5360d"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="main-page">
          <div className="main-page-sidebar">
              <Sidebar/>
          </div>
          <div className="main-page-content">
              <Outlet></Outlet>
          </div>
      </div>
    </ThemeProvider>
  );
}

export default MainPage;
