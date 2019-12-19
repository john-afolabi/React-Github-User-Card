import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 10
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: 70
  },
  info: {
      marginLeft: 15,
  }
});

export default function UserCard({
  name,
  username,
  img,
  bio,
  followersCount,
  followingCount
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box display="flex">
          <CardMedia className={classes.media} image={img} />
          <div className={classes.info}>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <p>Username: {username}</p>
            <p>Followers: {followersCount}</p>
            <p>Following: {followingCount}</p>
            <p>{bio}</p>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
