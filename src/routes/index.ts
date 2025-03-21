import { ComponentType, ReactNode } from "react";
import Register from "../pages/register";
import Login from "../pages/login";
import RecoverPassword from "../pages/recover-password";
import Home from "../pages/home";
import MainLayout from "../components/layouts/MainLayout.tsx";
import IntroduceYourself from "../pages/introduce-yourself";

interface IPublicRoutes {
  path: string;
  component: ComponentType;
  layout?: React.ComponentType<{ children: ReactNode }>;
}

export const publicRoutes: IPublicRoutes[] = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/recover-password", component: RecoverPassword },
  { path: "/introduce-yourself", component: IntroduceYourself },
];

export const privateRoutes: IPublicRoutes[] = [
  { path: "/", component: Home, layout: MainLayout },
];
