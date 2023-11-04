import React, { useEffect } from "react";

//formik
import { useFormik } from "formik";

//yup validation schema
import schema from "./loginValidation";

//dom route V6
import { useNavigate } from "react-router-dom";

//redux
import { login, loginThunk, loginReducer } from "../../Store/loginSlice"
import { useDispatch, useSelector } from "react-redux";

//mui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";


//assets
import AKLogo from "../../assets/AK.svg";

const defaultTheme = createTheme();

export default () => {
    //dom route V6
    const navigate = useNavigate()

    //redux
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.login);

    //formik
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            age: '',
            email: "",
            password: "",
            retypePss: '',
        },
        // validationSchema: schema,
        onSubmit: (values) => {
            // dispatch(loginReducer({ email: values.email, password: values.password }))
            console.log(values);
        },
    });

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <img src={AKLogo} />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>

                <form onSubmit={formik.handleSubmit} className="login-parent">
                    <TextField
                        helperText={
                            formik.touched.email &&
                            formik.errors.email &&
                            formik.errors.email
                        }
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={formik.handleChange}
                    />
                    <TextField
                        helperText={
                            formik.touched.password &&
                            formik.errors.password &&
                            formik.errors.password
                        }
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Back to login
                            </Link>
                        </Grid>

                    </Grid>

                    <Typography
                        className="mt-5"
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        <Link
                            target="_blank"
                            color="inherit"
                            href="https://www.linkedin.com/in/amr-khalil-reactjs/"
                        >
                            Amr Khalil
                        </Link>
                    </Typography>
                </form>
            </Box>
        </Grid>
    )
}

