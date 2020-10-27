import React from 'react';

function MainContent() {
  return (
    <>
      <div id="background" className="bg-mute">
        <div className="d-flex flex-wrap justify-content-around">
          <div id="main-items" className="bg-white col-3 shadow-sm mt-5">Hello</div>
          <div id="main-items" className="bg-white col-3 shadow-sm mt-5">Hello</div>
          <div id="main-items" className="bg-white col-3 shadow-sm mt-5">Hello</div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
