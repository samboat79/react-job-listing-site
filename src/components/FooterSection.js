import React from 'react';


function FooterSection() {
  return (
    <footer className="footer">
        <div className="footer_top">
            <div className="container-fluid">
            <div className="footer_border"></div>
                <div className="row align-items-center d-flex justify-content-around m-0 p-0">
                    <div className="col-xl-3 col-md-6 col-lg-3 p-0 m-0">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="footer_logo p-0 m-0">
                                <a href ="index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right_text wow fadeInUp m-0 p-0" data-wow-duration="1.4s" data-wow-delay=".3s">
                      <div className="col-xl-12 col-md-9 col-lg-12 p-0 m-0">
                          <p className="copy_right text-center p-0 m-0">
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href={'https://colorlib.com'} target="_blank" rel="noopener noreferrer">Colorlib</a>

                          </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection;