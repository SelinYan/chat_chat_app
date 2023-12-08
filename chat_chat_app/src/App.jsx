import { useContext } from "react";
import LeftBar from "./components/leftBar/leftBar";
import NavBar from "./components/navbar/navbar";
import RightBar from "./components/rightBar/rightBar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

function App() {
  const { currentUser } = useContext(AuthContext);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
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
    <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
