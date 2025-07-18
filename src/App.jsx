import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./pages/loginpage/LoginPage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import RootLayout from "./pages/root-layout/RootLayout";
import SignupPage from "./pages/signup/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "profile/:username",
        Component: ProfilePage,
      },
    ],
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
