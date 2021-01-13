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

export default function BasicAccordion() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={'text-center'}>What the service will include:</div>
        </AccordionSummary>
        <AccordionDetails className={'bg-success text-white shadowed'}>
          <ul className={'pb-2 bg-white text-dark pr-2'}>
            <li>Thorough dusting &amp; vacuuming</li>
            <li>Vacuum Trunk area (optional)</li>
            <li>Wiping down all interior surfaces with interior detailer or</li>
            <li>APC - All purpose cleaner or detail cleaning product.
              (Depending on level of soil on surfaces)</li>
            <li>Cleaning interior glass and windows</li>
            <li>This is a basic or maintenance cleaning of the interior. I only offer this
              service to vehicles that do not need a deep thorough cleaning. If the
              vehicle requires a deeper cleaning? I can provide a higher level more
              detailed interior service</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Prices</div>
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
