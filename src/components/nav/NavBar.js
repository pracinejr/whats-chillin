import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: "none",
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

export const NavBar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  // const logoutButton = () => {
  //   sessionStorage.clear();
  //   history.push("/login");
  // };

  const handlePostsButton = (regClick) => {
    if (regClick) {
      history.push("/posts");
    }
  };
  const handleFoodItemsButton = (regClick) => {
    if (regClick) {
      history.push("/foodItems");
    }
  };
  const handleCategoriesButton = (regClick) => {
    if (regClick) {
      history.push("/categories");
    }
  };
  const handleUsersButton = (regClick) => {
    if (regClick) {
      history.push("/users");
    }
  };
  const handleStorageAreasButton = (regClick) => {
    if (regClick) {
      history.push("/storageAreas");
    }
  };
  const handleHomesButton = (regClick) => {
    if (regClick) {
      history.push("/homes");
    }
  };

  return (
    <Drawer variant="permanant" classes={classes.drawerPaper}>
      <ListItem button={handlePostsButton}>
        <ListItemIcon>
          <MailOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Home / Posts" />
      </ListItem>
      <ListItem button={handleFoodItemsButton}>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="Food Items" />
      </ListItem>
      <ListItem button={handleCategoriesButton}>
        <ListItemIcon>
          <LocalGroceryStoreOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Food Categories" />
      </ListItem>
      <ListItem button={handleUsersButton}>
        <ListItemIcon>
          <AccessibilityNewIcon />
        </ListItemIcon>
        <ListItemText primary="Your Fam" />
      </ListItem>
      <ListItem button={handleStorageAreasButton}>
        <ListItemIcon>
          <AllInboxOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Storage Areas" />
      </ListItem>
      <ListItem button={handleHomesButton}>
        <ListItemIcon>
          <HomeWorkOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Homes" />
      </ListItem>
    </Drawer>

    // <nav>
    //   <ul className="navbar">
    //     <li className="navbar__item">
    //       <Link className="navbar__link" to="/foodItems">
    //         Food
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link className="navbar__link" to="/categories">
    //         Food Categories
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link className="navbar__link" to="/users">
    //         Your Fam
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link className="navbar__link" to="/storageAreas">
    //         Storage Areas
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link className="navbar__link" to="/homes">
    //         Your Home
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <button type="submit" onClick={logoutButton}>
    //         Logout
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
  );
};
