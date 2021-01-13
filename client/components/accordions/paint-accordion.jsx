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

export default function PaintAccordion() {
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
        <AccordionDetails>
          <div className={'text-center'}>
            <p>Small $175<br></br>Approximate Time: 2 hours<br></br></p>
            <p>Medium $200<br></br>Approximate Time: 2.5 hours<br></br></p>
            <p>Large $225<br></br>Approximate Time: 3 hours</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
