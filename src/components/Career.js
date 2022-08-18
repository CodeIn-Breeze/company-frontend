import React from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { LoadingIndicator } from "./LoadingIndicator";
import CareerTable from "./CareerTable";

class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careerCollection: []
    };
  }

  componentDidMount() {
    trackPromise(
      axios
        .get("https://inet-mern.herokuapp.com/api/getcareer")
        .then((res) => {
          this.setState({ careerCollection: res.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    );
  }

  render() {
    const career = this.state.careerCollection.map(function (data) {
      return (
        <>
          <div class="col-xl-8 col-lg-7 col-md-6">
            <h5 class="mb-0">{data.role}</h5>
          </div>
          <div class="col-md">
            <span>{data.location}</span>
          </div>
          <div class="col-md" style={{ cursor: "pointer", marginBottom: '10px' }}>
            <a
              href="www.codeinbreeze.com"
              class="btn btn-xs btn-primary"
              data-toggle="modal"
              data-target="#apply"
            >
              Apply now
            </a>
          </div>
        </>
      );
    });
    return (
      <div>
        <section class="py-md-4 pt-md-8">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-12 col-md-6">
                <h2>
                  Make Your Career
                  <span class="text-primary-desat">
                    <br /> With Us{" "}
                  </span>
                </h2>

                <p class="font-size-lg text-dark mb-6 mb-md-0">
                  Develop a refined list of career options by examining your
                  interests, skills, and values through self-assessment.
                  <br />
                  <br />
                  Narrow your career options by reviewing career
                  information, researching companies, and talking to
                  professionals in the field. You can further narrow your list
                  by doing internship at CodeIn Breeze Pvt. Ltd..
                </p>
              </div>
              <div class="col-12 col-md-6 col-xl-5">
                <div class="row no-gutters">
                  <div class="position-relative">
                    <div class="w-110 float-right p-1 bg-white shadow-lg">
                      {/* <!-- <img src="images/photo-21.jpg" class="img-fluid" alt="..." /> --> */}
                      <lottie-player
                        src="json/career.json"
                        background="transparent"
                        speed="0.8"
                        loop
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="pt-6 pt-md-8 pb-8">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8 text-center">
                <h2>
                  Find The <span class="text-theme">Right Job</span> For You.
                </h2>

                <p class="font-size-lg text-gray-700 mb-7 mb-md-9">
                  Right now we are looking some candidate for the below
                  technologies.
                </p>
              </div>
              <div class="col-xl-10">
                <div class="row no-gutters mb-3 d-none d-md-flex">
                  <div class="col-xl-8 col-lg-7 col-md-6">
                    <span
                      class="text-small text-dark"
                      style={{ marginLeft: "60px" }}
                    >
                      <b>Role</b>
                    </span>
                  </div>
                  <div class="col">
                    <span class="text-small text-dark">
                      <b>Location</b>
                    </span>
                  </div>
                  <div class="col">
                    <span
                      class="text-small text-dark"
                      style={{ marginLeft: "25px" }}
                    >
                      <b>Apply</b>
                    </span>
                  </div>
                </div>
                <div class="list-group list-group-flush ml-4">
                  <div class="" id="showListedJob">
                    <div class="row no-gutters py-3 pt-2">
                        <LoadingIndicator></LoadingIndicator>
                        {career}
                    </div>
                  </div>
                </div>
                <div class="m-1"></div>
              </div>
            </div>
          </div>
        </section>
        <div
          class="modal fade"
          id="apply"
          tabindex="-1"
          aria-labelledby="applyTitle"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <CareerTable></CareerTable>
        </div>
      </div>
    );
  }
}

export default Career;
