import React from 'react';

function ContactForm(props) {
  return (
    <>
      <div className="font-class-2 border-class-1 z position-absolute">{props.tileAndGroutCleaning}</div>
      <div className="font-class-2 border-class-1 z position-absolute">{props.carpetAndUpholstreyCleaning}</div>
      <img className="position-relative center" src={props.rectangle22} />
      <div className="text-center services-C61RwL font-class-2 border-class-1">{props.services}</div>
      <div className="d-flex justify-content-around">
        <div>
          <div className="text-center upholstrey-cleaning font-class-3 border-class-1">{props.upholstreyCleaning}</div>
          <img className="rectangle-11" src={props.rectangle11} />
        </div>
        <div>
          <div className="text-center carpet-cleaning font-class-3 border-class-1">{props.carpetCleaning}</div>
          <img className="rectangle-9" src={props.rectangle9} />
        </div>
        <div>
          <div className="text-center auto-detailing font-class-3 border-class-1">{props.autoDetailing}</div>
          <img className="rectangle-10" src={props.rectangle10} />
        </div>
      </div>
      <h1 className="about font-class-2 border-class-1">{props.about}</h1>

      <p className="lorem-ipsu-orem-ipsum font-class-1 border-class-1">
        {
          props.loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500SWhenAnUnknownPrinterTookAGalleyOfTypeAndScrambledItToMakeATypeSpecimenBookItHasSurvivedNotOnlyFiveCenturiesButAlsoTheLeapIntoElectronicTypesettingRemainingEssentiallyUnchangedItWasPopularisedInThe1960SWithTheReleaseOfLetrasetSheetsContainingLoremIpsumPassagesAndMoreRecentlyWithDesktopPublishingSoftwareLikeAldusPagemakerIncludingVersionsOfLoremIpsum
        }
      </p>
      <p className="it-is-a-lo-d-the-like font-class-1 border-class-1">
        {
          props.itIsALongEstablishedFactThatAReaderWillBeDistractedByTheReadableContentOfAPageWhenLookingAtItsLayoutThePointOfUsingLoremIpsumIsThatItHasAMoreOrLessNormalDistributionOfLettersAsOpposedToUsingContentHereContentHereMakingItLookLikeReadableEnglishManyDesktopPublishingPackagesAndWebPageEditorsNowUseLoremIpsumAsTheirDefaultModelTextAndASearchForLoremIpsumWillUncoverManyWebSitesStillInTheirInfancyVariousVersionsHaveEvolvedOverTheYearsSometimesByAccidentSometimesOnPurposeInjectedHumourAndTheLike
        }
      </p>

      <div className="contact font-class-2 border-class-1">{props.contact}</div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default ContactForm;
