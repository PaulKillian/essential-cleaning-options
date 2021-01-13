import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

export default function CarAccordion() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Prices</div>
        </AccordionSummary>
        <AccordionDetails className={'bg-success text-white shadowed'}>
          <div>
            <p>Small $25 - $30<br></br>Approximate Time: 1 hour<br></br></p>
            <p>Medium $30 - $35<br></br>Approximate Time: 1.5 hours<br></br></p>
            <p>Large $35-$40<br></br>Approximate Time: 1 hour 45 minutes</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
