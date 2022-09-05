import React, { useState } from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axiosClient from "./Navbar/helper.js";
import { useNavigate } from "react-router";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="#">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.first_name) {
      errors.first_name = "first name is required";
    } else if (!regex.test(values.first_name)) {
      errors.first_name = "not valid ";
    }
    if (!values.last_name) {
      errors.last_name = "first name is required";
    } else if (!regex.test(values.last_name)) {
      errors.last_name = "not valid ";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "not valid email";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password < 4) {
      errors.email = "not less than 4";
    } else if (values.password > 10) {
      errors.email = "not more than 10";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "password is required";
    } else if (values.confirm_password < 4) {
      errors.confirm_password = "more password than 4";
    } else if (values.confirm_password > 10) {
      errors.confirm_password = "more than password than 10";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  let name, value;
  const handleSubmit = (event) => {
    console.log(event);
    name = event.target.name;
    value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    event.preventDefault();
    validate(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const postData = async (event) => {
    axiosClient()
      .post("/user/signup", formValues)
      .then((res) => {
        setMessage(res?.data?.message);
        console.log("ressssssssss", res?.data?.message);

        navigate("signin");
      })
      .catch((error) => {
        console.log("error", error?.response.data.message);
        setMessage(error?.response.data.message);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="ui message success">
                <p>{message}</p>
              </div>
            ) : (
              <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box method="POST" component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <p>{formErrors.first_name}</p>
                  <TextField
                    autoComplete="off"
                    name="first_name"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    autoFocus
                    value={formValues.first_name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <p>{formErrors.last_name}</p>
                  <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    autoComplete="off"
                    value={formValues.last_name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <p>{formErrors.email}</p>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <p>{formErrors.password}</p>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <p>{formErrors.confirm_password}</p>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="confirm_password"
                    label="confirm_password"
                    name="confirm_password"
                    autoComplete="off"
                    value={formValues.confirm_password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="IsSubmit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={postData}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signin">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </form>
      </Container>
    </ThemeProvider>
  );
}
