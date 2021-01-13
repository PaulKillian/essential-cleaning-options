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

export default function DeepAccordion() {
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
            <p>Small $125 - $150<br></br>Approximate Time: 3 hours<br></br></p>
            <p>Medium $150 - $175<br></br>Approximate Time: 3.5 hour<br></br></p>
            <p>Large $175 - $200<br></br>Approximate Time: 4 hours</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
