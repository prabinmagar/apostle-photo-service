import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./screens/home/HomeScreen";
// layouts
import { BaseLayout } from "./components/common/layout/BaseLayout";
import { SearchLayout } from "./components/common/layout/SearchLayout";
// screens
import { SearchScreen } from "./screens/search/SearchScreen";
import NotFoundScreen from "./screens/error/NotFoundScreen";
// auth pages
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { Forgetpassword } from "./screens/auth/Forgetpassword";
import { ResetPassword } from "./screens/auth/ResetPassword";
// dashboard
import { Dashboard } from "./screens/sellcontent/dashboard/Dashboard";
// import { AdminLayout } from "./components/common/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/search",
    element: <SearchLayout />,
    children: [
      {
        path: "/search",
        element: <SearchScreen />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <
  //     }
  //   ]
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <Forgetpassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
