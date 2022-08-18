import React from 'react';

class WebDevelopment extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <section className="pt-8 pt-md-11">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-md-5">
                                <h2><span className="text-primary-desat">Web Development </span></h2>

                                {/* <!-- Text --> */}
                                <p className="font-size-lg mb-6 mb-md-0">
                                    Running a business in itself may be a huge accomplishment. they
                                    assert all you would like maybe a nice, novel plan. However, is it
                                    very all you need? are you able to build profits simply out of the
                                    generation of associate ideas?
                                    <br /><br />
                                </p>
                            </div>
                            <div className="col-12 col-md-7 col-xl-6">
                                <div className="row no-gutters">
                                    {/* <!-- <img
                src="images/IllustrationWebDevelopment.svg"
                alt="Web Development"
                width="100%"
              /> --> */}
                                    <lottie-player src="../json/Webdevelopment.json" background="transparent"
                                        speed="0.8" loop autoplay></lottie-player>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / .row --> */}
                    </div>
                    {/* <!-- / .container --> */}
                </section>
                <section className="pt-8 pt-md-11">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 text-center">
                                <p className="font-size-lg  mb-7 mb-md-9">
                                    At CodeIn Breeze Pvt. Ltd., we have a tendency to undoubtedly don't assume,
                                    therefore. We know that thought must reach the correct folks so as
                                    to figure. Often, businessmen perceive this too. However, they're
                                    in an exceeding perplexity of ‘how’ to form the concept reach its
                                    target market. Therefore, this is often wherever the most
                                    important question comes up. does one have an excellent business
                                    web site or perhaps a business web site at all?
            </p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="pt-8 pt-md-11">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 text-center">
                                <h2>We develop your ideas into consummated dreams</h2>
                                <p className="font-size-lg mb-7 mb-md-9">
                                    If you are doing not have a business web site then allow us to
                                    stop you right there and tell you as with politeness as we will
                                    that your business isn't about to be a productive one. it's
                                    imperative for your business to own an excellent on-line presence
                                    since the complete world is currently on-line. Your client reach
                                    will expand to heights and build your business grow ten times
                                    quicker. All you would like could be a sensible developer for web
                                    site development in Bhopal.
              <br /><br />
              No matter what business you're running, a web site is crucial for
              the net presence of your business. it'll cause you to reach
              customers you probably did not even assume existed before. To AN
              extent, it'll conjointly represent your complete and build a
              haunting impression on your target market.
            </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default WebDevelopment;