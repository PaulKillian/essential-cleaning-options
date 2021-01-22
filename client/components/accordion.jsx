import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

export default function PhotoAccordion() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
      </Accordion>
    </div>
  );
};
