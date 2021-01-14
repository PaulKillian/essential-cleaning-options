import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff'

  }
}));

export default function PlasticAccordion() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={'text-center'}>Prices:</div>
        </AccordionSummary>
        <AccordionDetails className={'bg-success text-white shadowed'}>
          <div>
            <p>Small $40 - $50<br></br>Approximate Time: 1 hour 30 minutes<br></br></p>
            <p>Medium $50 - $60<br></br>Approximate Time: 1 hour 45 minutes<br></br></p>
            <p>Large $60 - $65<br></br>Approximate Time: 2 hours</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
