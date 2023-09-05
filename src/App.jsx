import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from "./screens/home/HomeScreen";
import { Layout } from "./components/common/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />
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
