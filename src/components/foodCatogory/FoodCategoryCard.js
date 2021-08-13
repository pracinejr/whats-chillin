import React from "react";
import "./FoodCategory.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "cloudinary-react";
import { CardMedia, Container } from "@material-ui/core";

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
  card: {
    height: "250px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
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
    <React.Fragment>
      <Container maxWidth="sm">
        <Grid
          // className={classes.cardGrid}
          container
          spacing={4}
          justifyContent="left"
        >
          {cards.map((card) => (
            <Grid
              className={classes.cardGrid}
              item
              key={card}
              xs={4}
              sm={2}
              md={4}
            >
              <Card className={classes.card}>
                <CardMedia>
                  <Image
                    cloudName="pracinejr"
                    style={{ width: 200, height: 200 }}
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
      </Container>
    </React.Fragment>
  );
};
/* <section className="card">
        <h4 className="card-title">{category.name}</h4>
      </section> */
