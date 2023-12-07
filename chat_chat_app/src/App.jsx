import { useContext } from "react";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
