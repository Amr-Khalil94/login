//react dom
import ReactDOM from "react-dom/client";

//router dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//confg
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";
import store from "./Store";

//persist
import { PersistGate } from "redux-persist/integration/react";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";

//style
import "./index.css";

//component - Login
import Login from "./Components/Login/login";

//component - Main page
import MainPage from "./Components/Login/login";

//routing
const routes = createBrowserRouter([
  {
    path: "/main_page",
    element: <MainPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);


reportWebVitals();
