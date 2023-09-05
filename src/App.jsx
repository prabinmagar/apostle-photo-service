import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from "./screens/home/HomeScreen";
import { Layout } from "./components/common/layout/Layout";
import { SearchScreen } from "./screens/search/SearchScreen";

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
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
