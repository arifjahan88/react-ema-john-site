import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Orders from "./Components/Orders/Orders";
import Main from "./Layout/Main";
import Shop from "./Components/Shop/Shop";
import Inventory from "./Components/Inventory/Inventory";
import { productscartloader } from "./Loaders/Loaders";
import SignInForm from "./Components/SignIn/SignInForm";
import SignUpForm from "./Components/SignUp/SignUpForm";
import Shipping from "./Components/Shipping/Shipping";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productscartloader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "shipping",
          element: (
            <PrivateRoutes>
              <Shipping></Shipping>
            </PrivateRoutes>
          ),
        },
        {
          path: "signin",
          element: <SignInForm></SignInForm>,
        },
        {
          path: "signup",
          element: <SignUpForm></SignUpForm>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
