import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomeContext } from "../home/HomeProvider";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import { Select } from "@material-ui/core";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Input from "@material-ui/core/Input";

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

export const Register = () => {
  const classes = useStyles();

  const [registerUser, setRegisterUser] = useState({
    name: "",
    homeId: 0,
    email: "",
    photo: "",
  });
  const [conflictDialog, setConflictDialog] = useState(false);

  const { homes, getHomes } = useContext(HomeContext);

  const history = useHistory();

  useEffect(() => {
    console.log("useEffect: getHomes");
    getHomes();
  }, []);

  const handleInputChange = (event) => {
    const newUser = { ...registerUser };
    newUser[event.target.id] = event.target.value;
    setRegisterUser(newUser);
  };

  // const handleChange = (event) => {
  //   setRegisterUser(event.target.value);
  // };

  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below!
    return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
      .then((res) => res.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    existingUserCheck().then((userExists) => {
      if (
        registerUser.email === "" ||
        registerUser.name === "" ||
        registerUser.homeId === "" ||
        registerUser.photo === ""
      ) {
        window.alert("Please complete the form");
      } else if (!userExists) {
        // If your json-server URL is different, please change it below!
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registerUser.email,
            name: registerUser.name,
            homeId: registerUser.homeId,
            photo: registerUser.photo,
          }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              sessionStorage.setItem("whats_chillin_user", createdUser.id);
              sessionStorage.setItem(
                "whats_chillin_user_homeId",
                createdUser.homeId
              );
              history.push("/posts");
            }
          });
      } else {
        setConflictDialog(true);
      }
    });
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Grid container component="main" className={classes.root}>
      <dialog className="dialog dialog--password" open={conflictDialog}>
        <div>Account with that email address already exists</div>
        <button
          className="button--close"
          onClick={(e) => setConflictDialog(false)}
        >
          Close
        </button>
      </dialog>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register to What's Chillin'
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="name"
              id="name"
              value={registerUser.name}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userPhoto"
              label="UserPhoto"
              type="userPhoto"
              id="userPhoto"
              value={registerUser.userPhoto}
              onChange={handleInputChange}
            />
            <fieldset>
              <label htmlFor="user-home-id"></label>
              <select
                name="userId"
                id="homeId"
                value={registerUser.homeId}
                className="form-control"
                onChange={handleInputChange}
              >
                <option value="0">Select a Home</option>
                {homes.map((home) => {
                  return (
                    <option key={home.id} value={home.id}>
                      {home.name}
                    </option>
                  );
                })}
              </select>
            </fieldset>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleRegister}
            >
              Register & Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>

    // <main style={{ textAlign: "center" }}>
    //   <dialog className="dialog dialog--password" open={conflictDialog}>
    //     <div>Account with that email address already exists</div>
    //     <button
    //       className="button--close"
    //       onClick={(e) => setConflictDialog(false)}
    //     >
    //       Close
    //     </button>
    //   </dialog>

    //   <form className="form--login" onSubmit={handleRegister}>
    //     <h1 className="h3 mb-3 font-weight-normal">
    //       Please Register for Application Name
    //     </h1>
    //     <fieldset>
    //       <label htmlFor="name"> Name </label>
    //       <input
    //         type="text"
    //         name="name"
    //         id="name"
    //         className="form-control"
    //         placeholder="Name"
    //         required
    //         autoFocus
    //         value={registerUser.name}
    //         onChange={handleInputChange}
    //       />
    //     </fieldset>
    //     <fieldset>
    //       <label htmlFor="user-home-id">Select a Home</label>
    //       <select
    //         name="userId"
    //         id="homeId"
    //         value={registerUser.homeId}
    //         className="form-control"
    //         onChange={handleInputChange}
    //       >
    //         <option value="0">Select a Home</option>
    //         {homes.map((home) => {
    //           return (
    //             <option key={home.id} value={home.id}>
    //               {home.name}
    //             </option>
    //           );
    //         })}
    //       </select>
    //     </fieldset>
    //     <fieldset>
    //       <label htmlFor="inputEmail"> Email address </label>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         className="form-control"
    //         placeholder="Email address"
    //         required
    //         value={registerUser.email}
    //         onChange={handleInputChange}
    //       />
    //     </fieldset>
    //     <fieldset>
    //       <button type="submit"> Sign in </button>
    //     </fieldset>
    //   </form>
    // </main>
  );
};
