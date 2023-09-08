import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from "./screens/home/HomeScreen";
import { Layout } from "./components/common/layout/Layout";
import { SearchScreen } from "./screens/search/SearchScreen";
import NotFoundScreen from "./screens/error/NotFoundScreen";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />
      },
      {
        path: "/search",
        element: <SearchScreen />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "*",
        element: <NotFoundScreen />
      },
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
