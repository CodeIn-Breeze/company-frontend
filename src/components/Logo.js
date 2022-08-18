import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from './LoadingIndicator';

class Logo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        logoCollection: []
    };
}

componentDidMount() {
  trackPromise(
    axios.get('https://inet-mern.herokuapp.com/api/getlogo')
        .then(res => {
            console.log(res.data.data);
            this.setState({ logoCollection: res.data.data });
        })
        .catch(function (error) {
            console.log(error);
        }))
}

    render () {
      const logo = this.state.logoCollection.map(function (data) {
        return (
            <>
              <div
                className="col-12 col-md-4 logo column"
              >
                <a className="card shadow-light-lg mb-7" href={data.logoName} data-toggle="modal" data-target="#logo-img">
                  <div className="card-zoom">
                    <img
                      className="card-img"
                      src={data.logoImage}
                      alt="..."
                      style={{height: '250px', width: '100'}}
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
                      <h6 className="text-uppercase mb-1 text-muted">Logo</h6>
                      <h4 className="mb-0">{data.logoName}</h4>
                    </div>
                  </div>
                </a>
              </div>
                  </>
        );
      });
      return (
        <div>
                      {/* <!--LIVE WEBSITES--> */}
        <div className="row">
          <LoadingIndicator></LoadingIndicator>
          {logo}
          </div>
        </div>
    );
    }
}

export default Logo;