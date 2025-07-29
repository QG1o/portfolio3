import React from "react"

const App = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaseLayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>

            <div className="text-content">
                <h2>ON-Demand Rides Made Simple with a Powerful, User-friendyly App called Ryde</h2>
                <p className="text-whote-50 md:text-xl">
                    ON-Demand Rides Made Simple with a Powerful, User-friendyly App called Ryde
                </p>
            </div>
          </div>


          {/* RIGHT */}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection
