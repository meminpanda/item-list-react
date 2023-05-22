import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import ItemList from "./pages/ItemList/ItemList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "list",
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
