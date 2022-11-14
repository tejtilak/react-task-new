import React from "react";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <div>
      <div className="container about-mrg">
        <div className="about-headings pb-4">
          <h5>ABOUT US</h5>
          <h3>Know Us Better</h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div>
                {/* new method */}
                <div className="tile" id="tile-1">
                  {/* <!-- Nav tabs --> */}
                  <ul className="nav nav-tabs nav-justified about-nav" role="tablist">
                    <div className="slider"></div>
                    <li className="nav-item about-content-heading">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        General Order
                      </a>
                    </li>
                    <li className="nav-item about-content-heading">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Industrial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link about-content-heading"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Chemical
                      </a>
                    </li>
                  </ul>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <table className="table px-4 ">
                        <thead>
                          <tr>
                            <th scope="col" className="py-4">
                              Project title
                            </th>
                            <th scope="col" className="py-4 ">
                              Budget
                            </th>
                            <th scope="col" className="py-4">
                              Deadline
                            </th>
                            <th scope="col" className="py-4">
                              Client
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Cotton Raw Materials
                            </th>
                            <td className="py-4">2 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Zibal Fitwear</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Packing Materials For Export
                            </th>
                            <td className="py-4">14.8 Million</td>
                            <td className="py-4">2020 To 2022</td>
                            <td className="py-4">Virginteez</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Lab Materials
                            </th>
                            <td className="py-4">0.4 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Unilever</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Stationery
                            </th>
                            <td className="py-4">2.4 Million</td>
                            <td className="py-4">2019 To 2022</td>
                            <td className="py-4">Qadri Group Of Companies</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <table className="table px-4 ">
                        <thead>
                          <tr>
                            <th scope="col" className="py-4">
                              Project title
                            </th>
                            <th scope="col" className="py-4 ">
                              Budget
                            </th>
                            <th scope="col" className="py-4">
                              Deadline
                            </th>
                            <th scope="col" className="py-4">
                              Client
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Electric Cables
                            </th>
                            <td className="py-4">2 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Unilever</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Hardwear
                            </th>
                            <td className="py-4">2 Million</td>
                            <td className="py-4">2020 To 2022</td>
                            <td className="py-4">Unilever</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Maintaines Service
                            </th>
                            <td className="py-4">0.4 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Unilever</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Stiching machinery
                            </th>
                            <td className="py-4">1.6 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Zibal Fitwear</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <table className="table px-4 ">
                        <thead>
                          <tr>
                            <th scope="col" className="py-4">
                              Project title
                            </th>
                            <th scope="col" className="py-4 ">
                              Budget
                            </th>
                            <th scope="col" className="py-4">
                              Deadline
                            </th>
                            <th scope="col" className="py-4">
                              Client
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Copper Raw Materials
                            </th>
                            <td className="py-4">2 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Qadri Group Of Companies</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Caustic Soda
                            </th>
                            <td className="py-4">2.2 Million</td>
                            <td className="py-4">2020 To 2022</td>
                            <td className="py-4">Unilever</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Acetone
                            </th>
                            <td className="py-4">0.9 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Shoopo.inc</td>
                          </tr>
                          <tr>
                            <th scope="row" className="about-pro-title py-4">
                              Sodium Chloride
                            </th>
                            <td className="py-4">2.2 Million</td>
                            <td className="py-4">2021 To 2022</td>
                            <td className="py-4">Walls</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <div>
                <div>
                  <h3>Please tell us about your idea and how you want it to be</h3>
                  <div className="container  mt-5">
                    <div className="row my-4">
                      <div className="col-lg-12">
                        <p>
                          You are allowed to use this template for your websites. You
                          are
                          <span className=" about-span"> NOT allowed </span>to
                          redistribute the template ZIP file on any other template
                          websites.
                        </p>
                        <p className="pt-3">
                          Thank you for downloading and using our templates. Please
                          tell your friends about our website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default About;

