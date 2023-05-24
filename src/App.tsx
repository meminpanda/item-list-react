import "./app.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import ItemList from "./pages/ItemList/ItemList";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          index: true,
          path: "",
          element: <ItemList />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
