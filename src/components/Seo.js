import React from 'react';

class Seo extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <section className="pt-8 pt-md-11">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-md-6">
                                <h2>
                                    <span className="text-primary-desat">Search Engine Optimization</span
                                    >.
            </h2>


                                <p className="font-size-lg  mb-6 mb-md-0">
                                    If you have got an excellent business with an Associate web site,
                                    you would like individuals to be able to realize it, right? Search
                                    engine optimization (SEO) is the best approach for individuals to
                                    find your business.
            </p>
                            </div>
                            <div className="col-12 col-md-6 col-xl-5">
                                <div className="row no-gutters">
                                    {/* <!-- <img src="images/IllustrationSEO.svg" alt="SEO" width="100%" /> --> */}
                                    <lottie-player src="../json/SEO.json" background="transparent"
                                        speed="0.8" loop autoplay></lottie-player>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <section className="pt-8 pt-md-11">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 text-center">
                                <h2>How We carry out Search Engine Optimization</h2>
                                <p className="font-size-lg  mb-7 mb-md-9">
                                    SEO needs diligence and time and plenty of business house owners
                                    don’t have the time to try to it, however, they still wish to
                                    receive the advantages. That’s wherever we have a tendency to are
                                    available in.
              <br /><br />
              CodeIn Breeze Pvt. Ltd. could be a full-service digital promoting company
              that focuses on SEO in India. We’ll facilitate customers to
              realize your web site thus you'll place your energy into that
              specialize in your business. We offer packages to fit your unique
              needs. You won’t get a cookie-cutter plan because we tailor our
              plans to what works best for you and your company. If you’re able
              to begin gaining conversions, see however our SEO services will
              assist you to win that goal!
              <br /><br />
              It is very accessible for any business once the potential
              purchasers will realize your web site through stylish engines like
              Google, Yahoo, and Bing, etc. The websites may be established
              simply on programs providing they're ordered befittingly in order
              that it's straightforward for any search engine to index them. Our
              search engine optimization (SEO) techniques help our client
              website to be predictable by any visitor who is searching for
              specific services of a company.
            </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Seo;