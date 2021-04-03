import React from "react";
import "../css/css/animate.css";
import "../css/css/green.css";
import "../css/css/huy.css";
import "../css/css/new1.css";
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
const Footer = () => {
  return (
    <div>
      {/* Liên Hệ */}
      <div className="Footer container-fuild mt-5">
        <div className="row">
          <div className="col-sm-4 mt-3">
            <div className="widget">
              <h4 className="text-black ml-2">Hot Line:</h4>
              <h4 className="">
                <i className="fa fa-phone ml-2"></i> 0905 463 037
              </h4>
            </div>
          </div>
          <div className="col-sm-4 mt-3">
            <div className="">
              <h4 className="">Information: </h4>
              <div>
                <ul>
                  <li>
                    <a href="blog_fullwidth_2col.html">
                      <i className="fa fa-chevron-right text-black"></i> Web Design
                    </a>
                  </li>
                  <li>
                    <a href="blog_fullwidth_2col.html">
                      <i className="fa fa-chevron-right"></i> Web development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-3">
            <div className="col-sm-10">
              <div className="widget">
                <h4 className="">Contact Us: </h4>
                <div>
                  <div className="contact-info">
                    <i className="fas fa-map-marker-alt mt-4 ml-2"></i>
                    <p className="mt-3 ml-4">
                      K448/67 Trưng Nữ Vương - Hải Châu - Đà Nẵng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thòi Gian */}
      <div className="Footer1 container-fluid bg-dark ">
        <div className="row">
          <div className="col-6 mt-3 text-white">
            <p className="mt-3">
              Copyright © 2004-2021 OPPO. All rights reserved.
            </p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <p className="ml-5">
              <a href="#" className="mr-3 ">
                <i className="fa-2x fab fa-cc-visa mt-4"></i>
              </a>
              <a href="#">
                <i className="fa-2x far fa-credit-card mt-2"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
