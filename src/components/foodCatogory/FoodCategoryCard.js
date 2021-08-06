import React from "react";
import "./FoodCategory.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
// import CardMedia from "@material-ui/core/CardMedia";
import { Image } from "cloudinary-react";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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

export const CategoryCard = ({ category }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.cardGrid} container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}>
              <Image
                cloudName="pracinejr"
                // style={{ width: 200, height: 200 }}
                publicId={category.image}
              />
            </CardMedia>
            <CardContent className={classes.cardContent}>
              {category.name}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
/* <section className="card">
        <h4 className="card-title">{category.name}</h4>
      </section> */
