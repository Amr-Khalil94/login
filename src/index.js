//react dom
import ReactDOM from "react-dom/client";

//router dom v6
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//confg
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";
import store from "./Store";

//mui
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";


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
import ForgetPss from "./Components/ForgetPss/forgetPss.js"
import SignUp from './Components/SignUp/signup.js'

//component - Main page
import MainPage from "./Components/Login/login";

//routing
const routes = createBrowserRouter([
  {
    path: "/main_page",
    element: <MainPage />,
  },

  {
    path: '/auth/',
    element: <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Outlet />
    </Grid>,
    children: [
      { path: 'login', element: <h1>login</h1> },
      { path: 'forget-password', element: <h1>forget-password</h1> },
      { path: 'signup', element: <h1>signup</h1> },
    ]
  },


  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forget-password",
    element: <Login />,
  },
  {
    path: "signup",
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
