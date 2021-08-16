import React, { useContext } from "react";
import "./FoodItem.css";
import { useHistory } from "react-router-dom";
import { FoodItemContext } from "./FoodItemProvider";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Image } from "cloudinary-react";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  // cardGrid: {
  //   display: "flex",
  //   flexWrap: "wrap",
  // },
  card: {
    height: "100%",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#18286B",
    // color: "#fb53a0"
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export const FoodItemCard = ({ foodItem }) => {
  // const { foodItems, getFoodItems } = useContext(FoodItemContext);

  const classes = useStyles();

  const handleEdit = () => {
    history.push(`/foodItems/edit/${foodItem.id}`);
  };

  const todaysDate = new Date();

  const expirationDate = new Date(foodItem.expirationDate);

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  const expiredFood = todaysDate > expirationDate;

  const history = useHistory();

  return (
    <>
      {foodItem.homeId === currentUserHomeId ? (
        <React.Fragment>
          <CssBaseline />
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia>
                      <Image
                        cloudName="pracinejr"
                        style={{ width: 200, height: 200 }}
                        publicId={foodItem.photo}
                      />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {foodItem.name}
                      </Typography>
                      <Typography>{foodItem.home?.name}</Typography>
                      <Typography>{foodItem.category?.name}</Typography>
                      <Typography>{foodItem.storageArea?.name}</Typography>
                      <Typography>${foodItem.price}</Typography>
                      <Typography>
                        Date Purchased: {foodItem.datePurchased}
                      </Typography>
                      <Typography>
                        Expiration Date: {foodItem.expirationDate}
                      </Typography>
                      {expiredFood ? (
                        <Typography className="expiration_alert">
                          THIS ITEM IS EXPIRED
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </CardContent>
                    <CardActions>
                      <Button
                        type="submit"
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleEdit}
                      >
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </React.Fragment>
      ) : (
        <></>
      )}
    </>
  );
};
