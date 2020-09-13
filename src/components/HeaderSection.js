import React, { Component } from 'react';

class HeaderSection extends Component {
    render() {
        return (
            <div>
        
            <header>
                <div className="header-area ">
                    <div id="sticky-header" className="main-header-area">
                        <div className="container-fluid m-2">
                            <div className="header_bottom_border">
                                <div className="row align-items-center p-0 m-0">
                                    <div className="col-xl-3 col-lg-2 p-0 m-0">
                                        <div className="logo m-0 p-0">
                                            <a href="index.html">
                                                <img className="p-0 m-0" src="img/logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        
            <div className="slider_area">
                <div className="single_slider  d-flex align-items-center slider_bg_1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6 mt-20">
                                <div className="slider_text">
                                    <h5 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">Are you a developer?</h5>
                                    <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">Find your Dream Job</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ilstration_img wow fadeInRight d-none d-lg-block text-right" data-wow-duration="1s" data-wow-delay=".2s">
                    <img src="img/banner/illustration.png" alt="" />
                </div>
            </div>
        
            </div>
          )
    }

}

export default HeaderSection;