import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from './LoadingIndicator';

class Upcoming extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        upcomingWebsiteCollection: []
    };
}

componentDidMount() {
  trackPromise(
    axios.get('https://inet-mern.herokuapp.com/api/getupcomingwebsite')
        .then(res => {
            console.log(res.data.data)
            this.setState({ upcomingWebsiteCollection: res.data.data });
        })
        .catch(function (error) {
            console.log(error);
        }))
}

    render() {

      const upcoming = this.state.upcomingWebsiteCollection.map(function (data) {
        return (
             <>
                           {/* <!--UPCOMING--> */}        
              <div
                className="col-12 col-md-4 upcoming column"
              >
                <a className="card shadow-light-lg mb-7" href={data.websiteUrl} target="_blank" rel="noreferrer">
                  <div className="card-zoom">
                    <img
                      className="card-img"
                      src={data.websiteImage}
                      alt="..."
                    />
                  </div>
                  <div className="card-img-overlay card-img-overlay-hover">
                    <div className="card-body bg-white">
                      <div
                        className="shape shape-bottom-100 shape-fluid-x svg-shim text-white"
                      >
                        <svg
                          viewBox="0 0 2880 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <h6 className="text-uppercase mb-1 text-muted">Website</h6>
                      <h4 className="mb-0">{data.websiteName}</h4>
                    </div>
                  </div>
                </a>
              </div>
            {/* <!--UPCOMING END--> */}
             </>
      )
        });

        return(
          <>
            <div className="row">
              <LoadingIndicator></LoadingIndicator>
              {upcoming}
            </div>
          </>
        )
    }
}

export default Upcoming;