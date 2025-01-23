import { createBrowserRouter } from "react-router";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import ErrorDetail from "./ErrorDetail";
import SignIn from "../components/auth/SignIn";

export const Links = [
  { path: "/", value: "Inicio" },
  { path: "/about", value: "Información del proyecto" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: (
      <NavBar>
        <ErrorDetail />
      </NavBar>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);

export default router;

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
</BrowserRouter>; */
}
