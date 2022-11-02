import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Program } from "../pages/Program";
import { Tickets } from "../pages/Tickets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/program",
        element: <Program />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
