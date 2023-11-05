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


// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";

//style
import "./index.css";



import Login from "./Components/Auth/login";
import ForgetPss from "./Components/Auth/forgetPss"
import SignUp from "./Components/Auth/signup"

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
      { path: 'login', element: <Login /> },
      { path: 'forget-password', element: <ForgetPss /> },
      { path: 'signup', element: <SignUp /> },
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
