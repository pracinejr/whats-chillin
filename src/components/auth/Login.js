import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        What's Chillin'?
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "" });
  const [existDialog, setExistDialog] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const newUser = { ...loginUser };
    newUser[event.target.id] = event.target.value;
    setLoginUser(newUser);
  };

  const handleRegisterButton = (regClick) => {
    if (regClick) {
      history.push("/register");
    }
  };

  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below!
    return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        // The user id is saved under the key whats_chillin_user in session Storage. Change below if needed!
        sessionStorage.setItem("whats_chillin_user", parseInt(exists.id));
        sessionStorage.setItem(
          "whats_chillin_user_homeId",
          parseInt(exists.homeId)
        );
        history.push("/posts");
      } else {
        setExistDialog(true);
      }
    });
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <dialog className="dialog dialog--auth" open={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => setExistDialog(false)}
        >
          Close
        </button>
      </dialog>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginUser.email}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleRegisterButton}
            >
              Register Here
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>

    // <main className="container--login">
    //   <dialog className="dialog dialog--auth" open={existDialog}>
    //     <div>User does not exist</div>
    //     <button
    //       className="button--close"
    //       onClick={(e) => setExistDialog(false)}
    //     >
    //       Close
    //     </button>
    //   </dialog>
    //   <section>
    //     <form className="form--login" onSubmit={handleLogin}>
    //       <h1>What's Chillin'?</h1>
    //       <h2>Please sign in</h2>
    //       <fieldset>
    //         <label htmlFor="inputEmail"> Email address </label>
    //         <input
    //           type="email"
    //           id="email"
    //           className="form-control"
    //           placeholder="Email address"
    //           required
    //           autoFocus
    //           value={loginUser.email}
    //           onChange={handleInputChange}
    //         />
    //       </fieldset>
    //       <fieldset>
    //         <button type="submit">Sign in</button>
    //       </fieldset>
    //     </form>
    //   </section>
    //   <section className="link--register">
    //     <Link to="/register">Register for an account</Link>
    //   </section>
    // </main>
  );
};
