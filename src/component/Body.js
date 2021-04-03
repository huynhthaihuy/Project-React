import React from "react";
import "../css/css/animate.css";
import "../css/css/green.css";
import "../css/css/huy.css";
import "../css/css/new1.css";
import { Carousel } from "react-responsive-carousel";
import Slide1 from "../css/source/image/slide/new.png";
import Slide2 from "../css/source/image/slide/reno.png";
import Slide3 from "../css/source/image/slide/issac.jpg";
import Product from "../css/source/image/slide/Xiaomi-Black-Shark-4-600x600.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "../component/Detail";
import { Route, Switch } from "react-router";
import ImageSlider from "./ImageSlider";

const Body = () => {
  return (
    <div>
      <div className="Body1--Style container-fluid d-flex px-0 py-0 ">
      </div>
      {/* Found Product */}
      <div className="container mt-3">
        <h4>Sản Phẩm Mới</h4>
        <div className="beta-products-details">
          <p className="pull-left">Tìm thấy sản phẩm</p>
          <div className="clearfix"></div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="single-item">
              <div className="ribbon-wrapper">
                <div className="ribbon sale">Sale</div>
              </div>
              <div className="single-item-header">
                <a href="/chi-tiet-san-pham">
                  <img src={Product} alt="" height="250px" />
                </a>
              </div>
              <div className="single-item-body">
                <p className="single-item-title"></p>
                <p className="single-item-price">
                  <span className="flash-sale"></span>
                  <span className="flash-del"></span>
                  <span className="flash-sale"></span>
                </p>
              </div>
              <div className="single-item-caption">
                <a className="add-to-cart pull-left" href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <a className="beta-btn primary" href="">
                  Details <i className="fa fa-chevron-right"></i>
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="single-item">
              <div className="ribbon-wrapper">
                <div className="ribbon sale">Sale</div>
              </div>
              <div className="single-item-header">
                <a href="/chi-tiet-san-pham">
                  <img src={Product} alt="" height="250px" />
                </a>
              </div>
              <div className="single-item-body">
                <p className="single-item-title"></p>
                <p className="single-item-price">
                  <span className="flash-sale"></span>
                  <span className="flash-del"></span>
                  <span className="flash-sale"></span>
                </p>
              </div>
              <div className="single-item-caption">
                <a className="add-to-cart pull-left" href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <a className="beta-btn primary" href="">
                  Details <i className="fa fa-chevron-right"></i>
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="single-item">
              <div className="ribbon-wrapper">
                <div className="ribbon sale">Sale</div>
              </div>
              <div className="single-item-header">
                <a href="/chi-tiet-san-pham">
                  <img src={Product} alt="" height="250px" />
                </a>
              </div>
              <div className="single-item-body">
                <p className="single-item-title"></p>
                <p className="single-item-price">
                  <span className="flash-sale"></span>
                  <span className="flash-del"></span>
                  <span className="flash-sale"></span>
                </p>
              </div>
              <div className="single-item-caption">
                <a className="add-to-cart pull-left" href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <a className="beta-btn primary" href="">
                  Details <i className="fa fa-chevron-right"></i>
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="single-item">
              <div className="ribbon-wrapper">
                <div className="ribbon sale">Sale</div>
              </div>
              <div className="single-item-header">
                <a href="/chi-tiet-san-pham">
                  <img src={Product} alt="" height="250px" />
                </a>
              </div>
              <div className="single-item-body">
                <p className="single-item-title"></p>
                <p className="single-item-price">
                  <span className="flash-sale"></span>
                  <span className="flash-del"></span>
                  <span className="flash-sale"></span>
                </p>
              </div>
              <div className="single-item-caption">
                <a className="add-to-cart pull-left" href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <a className="beta-btn primary" href="">
                  Details <i className="fa fa-chevron-right"></i>
                </a>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
      {/* Sale Product */}
      <div className="container mt-5">
        <div className="beta-products-list">
          <h4>Sản Phẩm Khuyến Mãi</h4>
          <div className="beta-products-details">
            <p className="pull-left">Tìm thấy sản phẩm</p>
            <div className="clearfix"></div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="single-item">
                <div className="ribbon-wrapper">
                  <div className="ribbon sale">Sale</div>
                </div>
                <div className="single-item-header">
                  <a href="/chi-tiet-san-pham">
                    <img src={Product} alt="" height="250px" />
                  </a>
                </div>
                <div className="single-item-body">
                  <p className="single-item-title"></p>
                  <p className="single-item-price">
                    <span className="flash-sale"></span>
                    <span className="flash-del"></span>
                    <span className="flash-sale"></span>
                  </p>
                </div>
                <div className="single-item-caption">
                  <a className="add-to-cart pull-left" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="beta-btn primary" href="">
                    Details <i className="fa fa-chevron-right"></i>
                  </a>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-item">
                <div className="ribbon-wrapper">
                  <div className="ribbon sale">Sale</div>
                </div>
                <div className="single-item-header">
                  <a href="/chi-tiet-san-pham">
                    <img src={Product} alt="" height="250px" />
                  </a>
                </div>
                <div className="single-item-body">
                  <p className="single-item-title"></p>
                  <p className="single-item-price">
                    <span className="flash-sale"></span>
                    <span className="flash-del"></span>
                    <span className="flash-sale"></span>
                  </p>
                </div>
                <div className="single-item-caption">
                  <a className="add-to-cart pull-left" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="beta-btn primary" href="">
                    Details <i className="fa fa-chevron-right"></i>
                  </a>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-item">
                <div className="ribbon-wrapper">
                  <div className="ribbon sale">Sale</div>
                </div>
                <div className="single-item-header">
                  <img src={Product} alt="" height="250px" />
                </div>
                <div className="single-item-body">
                  <p className="single-item-title"></p>
                  <p className="single-item-price">
                    <span className="flash-sale"></span>
                    <span className="flash-del"></span>
                    <span className="flash-sale"></span>
                  </p>
                </div>
                <div className="single-item-caption">
                  <a className="add-to-cart pull-left" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="beta-btn primary" href="">
                    Details <i className="fa fa-chevron-right"></i>
                  </a>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-item">
                <div className="ribbon-wrapper">
                  <div className="ribbon sale">Sale</div>
                </div>
                <div className="single-item-header">
                  <img src={Product} alt="" height="250px" />
                </div>
                <div className="single-item-body">
                  <p className="single-item-title"></p>
                  <p className="single-item-price">
                    <span className="flash-sale"></span>
                    <span className="flash-del"></span>
                    <span className="flash-sale"></span>
                  </p>
                </div>
                <div className="single-item-caption">
                  <a className="add-to-cart pull-left" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="beta-btn primary" href="">
                    Details <i className="fa fa-chevron-right"></i>
                  </a>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};
export default Body;
