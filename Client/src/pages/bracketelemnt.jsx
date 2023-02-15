import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  team: {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
  },
}));

const Bracket = ({ teams }) => {
  const classes = useStyles();

  return (
    <div>
      {teams.map((team, index) => (
        <div key={index} className={classes.team}>
          <Typography>{team}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Bracket;
