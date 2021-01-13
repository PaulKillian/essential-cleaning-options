import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  }
}));

export default function BasicAccordion() {
  const classes = useStyles();
  return (
    <div className={classes.root} m={0}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Prices</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p>Small $40 - $50<br></br>Approximate Time: 1 hour 30 minutes<br></br></p>
            <p>Medium $50 - $60<br></br>Approximate Time: 1 hour 45 minutes<br></br></p>
            <p>Large $60 - $65<br></br>Approximate Time: 2 hours</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
