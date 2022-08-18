import React, { useEffect, useState } from 'react';
import Graphics from './Graphics';
import LiveWebsite from './LiveWebsites';
import Logo from './Logo';
import Upcoming from './UpcomingWebsite';

function Portfolio () {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const [active, setActive] = useState("Live");

    return (
      <div>
        <section className="pt-8 pt-md-12 pb-12 pb-md-15">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                {/* <!-- Heading --> */}
                <h1 className="display-1 font-weight-bold">Our Work</h1>

                {/* <!-- Text --> */}
                <p className="lead text-secondary mb-4">
                  We design &amp; build websites for companies trying to do great
                  things
                </p>

                {/* <!-- Badges --> */}
                <nav className="nav justify-content-center">
                  <a
                    className="badge badge-pill badge-secondary-soft mr-1 mb-1"
                    href="..."
                    data-toggle="pill"
                    data-filter=".live"
                    data-target="#portfolio"
                    onClick={() => setActive("Live")}
                  >
                    <span className="h6 text-uppercase">Live Websites</span>
                  </a>
                  <a
                    className="badge badge-pill badge-secondary-soft mr-1 mb-1"
                    href="..."
                    data-toggle="pill"
                    data-filter=".logo"
                    data-target="#portfolio"
                    onClick={() => setActive("Logo")}
                  >
                    <span className="h6 text-uppercase">Logo</span>
                  </a>
                  <a
                    className="badge badge-pill badge-secondary-soft mr-1 mb-1"
                    href="..."
                    data-toggle="pill"
                    data-filter=".graphics"
                    data-target="#portfolio"
                    onClick={() => setActive("Graphics")}
                  >
                    <span className="h6 text-uppercase">Graphics</span>
                  </a>
                  <a
                    className="badge badge-pill badge-secondary-soft mr-1 mb-1"
                    href="..."
                    data-toggle="pill"
                    data-filter=".upcoming"
                    data-target="#portfolio"
                    onClick={() => setActive("Upcoming")}
                  >
                    <span className="h6 text-uppercase">Upcoming Websites</span>
                  </a>
                </nav>
              </div>
            </div>
            {/* <!-- / .row --> */}
          </div>
          {/* <!-- / .container --> */}
        </section>

        {/* <!-- CONTENT
      ================================================== --> */}
        <section className="py-8 py-md-11 mt-n10 mt-md-n14" style={{ backgroundColor: '#2f2f2f' }}>
          <div className="container">
          {active === "Live" && <LiveWebsite></LiveWebsite>}
          {active === "Logo" && <Logo></Logo>}
          {active === "Graphics" && <Graphics></Graphics>}
          {active === "Upcoming" && <Upcoming></Upcoming>}
        </div>
        </section>
        <br></br>
      </div>
    );
  
}

export default Portfolio;