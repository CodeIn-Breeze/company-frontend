import React from 'react';

class PenetrationTesting extends React.Component {
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
                                    <span className="text-primary-desat">Penetration Testing </span>
                                </h2>


                                <p className="font-size-lg  mb-6 mb-md-0">
                                    The best way to find flaws in your web application is by doing penetration testing,
                                    also known as Pen Test or Pen Testing. This is the most widely used security testing
                                    strategy for most web applications.
              <br />
              Penetration testing for web applications is carried out by initiating simulated attacks,
              both internally and externally, in order to get access to sensitive data.
              <br />
              A pen test allows the end user to determine any security weakness of the entire web
              application and across its components, including the source code, database, and back-end
              network. This helps the developer in prioritizing the pinpointed vulnerabilities and threats,
              and come up with strategies to mitigate them.
            </p>
                            </div>
                            <div className="col-12 col-md-6 col-xl-5">
                                <div className="row no-gutters">
                                    {/* <!-- <img src="images/testing.svg" alt="Testing" width="100%" /> --> */}
                                    <lottie-player src="../json/PenetrationTesting.json" background="transparent"
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
                                <h2>Why Is Penetration Testing Important?</h2>
                                <p className="font-size-lg  mb-7 mb-md-9">
                                    Almost everything that we do is done through the internet. From shopping to banking to
                                    everyday transactions, most of them can be done digitally. And there are several web
                                    applications that can be used to complete these online activities.
              <br /><br />
              The popularity of web applications has also introduced another vector of attack that
              malicious third parties can exploit for their personal gains. Since web applications
              usually store or send out sensitive data, it is crucial to keep these apps secure at all
              time, particularly those that are publicly exposed to the World Wide Web.
              <br /><br />
              In a nutshell, penetration testing is a preventive control measure that lets you analyse
              the overall status of the existing security layer of a system.
            </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 py-md-11">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-md-5 order-md-2">
                                <h2>
                                    These are the common goals of doing pen testing for web apps<br />
                                </h2>
                            </div>
                            <div className="col-12 col-md-6 order-md-1">
                                <div className="card card-border border-theme shadow-lg">
                                    <div className="card-body">
                                        <div className="list-group list-group-flush">
                                            <div className="list-group-item d-flex align-items-center">
                                                <div className="mr-auto">
                                                    <p className="font-weight-bold mb-1">Identify unknown vulnerabilities</p>
                                                </div>
                                                <div
                                                    className="badge badge-rounded-circle badge-theme-soft ml-4"
                                                >
                                                    <i className="fe fe-check"></i>
                                                </div>
                                            </div>

                                            <div className="list-group-item d-flex align-items-center">
                                                <div className="mr-auto">
                                                    <p className="font-weight-bold mb-1">Check the effectiveness of the existing security policies</p>
                                                </div>
                                                <div
                                                    className="badge badge-rounded-circle badge-theme-soft ml-4"
                                                >
                                                    <i className="fe fe-check"></i>
                                                </div>
                                            </div>

                                            <div className="list-group-item d-flex align-items-center">
                                                <div className="mr-auto">
                                                    <p className="font-weight-bold mb-1">Test publicly exposed components, including firewalls, routers, and DNS</p>
                                                </div>
                                                <div
                                                    className="badge badge-rounded-circle badge-theme-soft ml-4"
                                                >
                                                    <i className="fe fe-check"></i>
                                                </div>
                                            </div>

                                            <div className="list-group-item d-flex align-items-center">
                                                <div className="mr-auto">
                                                    <p className="font-weight-bold mb-1">
                                                        Determine the most vulnerable route for an attack
                    </p>
                                                </div>
                                                <div
                                                    className="badge badge-rounded-circle badge-theme-soft ml-4"
                                                >
                                                    <i className="fe fe-check"></i>
                                                </div>
                                            </div>

                                            <div className="list-group-item d-flex align-items-center">
                                                <div className="mr-auto">
                                                    <p className="font-weight-bold mb-1">Look for loopholes that could lead to the data theft</p>
                                                </div>
                                                <div
                                                    className="badge badge-rounded-circle badge-theme-soft ml-4"
                                                >
                                                    <i className="fe fe-check"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </>
        );
    }
}

export default PenetrationTesting;