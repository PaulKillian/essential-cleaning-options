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
          <div>Clear Coat Decontamination<br></br>
            Sealant/Wax/Coating Applications:
          </div>
        </AccordionSummary>
        <AccordionDetails className={'bg-success text-white shadowed'}>
          <div className={'px-3'}>
            <p>Step 1. Clay towel, Clay disc or Clay bar to remove embedded
              contaminants from the clear coat and windshield</p>
            <p>Step 2. Clean all Clayed surfaces with a paint prep or APA which is an
              alcohol wash and distilled to remove any particles left behind on the
              surface prior to polishing</p>
            <p>Step 3. One-step polish (Using a D/A dual action polisher) with an AIO
              all in one glaze polish seal or all in one polish finishing with a sealant
              wax or Graphene coating for up to 6 months of clear coat protection</p>
          </div>
        </AccordionDetails>
      </Accordion>
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
            <p>Small $175<br></br>Approximate Time: 2 hours<br></br></p>
            <p>Medium $200<br></br>Approximate Time: 2.5 hours<br></br></p>
            <p>Large $225<br></br>Approximate Time: 3 hours</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
