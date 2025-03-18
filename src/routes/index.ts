import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import RecoverPassword from "../pages/recover-password";

export const publicRoutes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/recover-password", component: RecoverPassword },
  { path: "/", component: Home },
];
