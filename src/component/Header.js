import React from "react";
import { Dropdown, Image, Modal, Input, Button } from "semantic-ui-react";
import "../css/css/animate.css";
import "../css/css/green.css";
import "../css/css/huy.css";
import "../css/css/new1.css";
import "../css/css/pricing.css";
import Logo from "../css/images/tải xuống.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import '../css/js/jquery.colorbox-min';
class Header extends React.Component {
  dropdownOptions = () => [
    {
      key: "Xiao Mi",
      text: <span>Xiao Mi</span>,
    },
    {
      key: "Iphone",
      text: <span>Iphone</span>,
    },
    {
      key: "SamSung",
      text: <span>SamSung</span>,
    },
  ];
  render() {
    return (
      <div>
        <div id="header">
          <div class="HeaderPricing--Style container-fluid align-items-center border-top">
            <div class="row mt-2">
              <div class="col-6 d-flex justify-content-start align-items-center my-2">
                <img src={Logo} height="40px" className="w-25" />
              </div>
              <div class="Content--Style col-6 d-flex justify-content-end align-items-center my-2">
                <button type="button" class="nav4 btn btn-outline-primary mr-1">
                  <Link to="/login">Đăng Nhập</Link>
                </button>
                <button type="button" class="nav4 btn btn-outline-primary ml-1">
                  <Link to="/register">Đăng Ký</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="Header1 container-fluid d-flex d-none d-xl-block align-items-center bg-light">
            <div className="row">
              <div className="col-6 d-flex justify-content-start">
                <nav className="main-menu">
                  <ul className="nav mt-4">
                    <a class="nav0 nav link active ml-3" href="#">
                      <Link to="/">Trang Chủ</Link>
                    </a>
                    <a class=" nav1 nav link ml-5" href="#">
                      <Dropdown
                        trigger={<span>Loại Sản Phẩm</span>}
                        options={this.dropdownOptions()}
                      />
                    </a>
                    <a class="nav2 nav link ml-5" href="#">
                      <Link to="/contact">Liên Hệ</Link>
                    </a>
                  </ul>
                </nav>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <form role="search" method="get" id="searchform" action="">
                  <input
                    type="text"
                    value=""
                    name="search"
                    id="s"
                    placeholder="Nhập từ khóa..."
                    className="mt-4"
                  />
                  <button
                    className="fas fa-search mb-1 mt-4"
                    type="submit"
                    id="searchsubmit"
                  ></button>
                </form>
              </div>
              <div className="col-2 d-flex justify-content-center mt-3">
                <div className="cart">
                  <div className="beta-select">
                    <i className="fa fa-shopping-cart"></i> Giỏ hàng
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div className="beta-dropdown cart-body">
                    <div className="cart-item">
                      <a className="cart-item-delete" href="">
                        <i className="fa fa-times"></i>
                      </a>
                      <div className="media">
                        <a className="pull-left" href="#">
                          <img src="source/image/product/" alt="" />
                        </a>
                        <div className="media-body">
                          <span className="cart-item-title"></span>
                          <span className="cart-item-amount">
                            <span></span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="cart-caption">
                      <div className="cart-total text-right">
                        Tổng tiền: <span className="cart-total-value"></span>
                      </div>
                      <div className="clearfix"></div>

                      <div className="center">
                        <div className="space10">&nbsp;</div>
                        <a
                          href="{{route('dathang')}}"
                          className="beta-btn primary text-center"
                        >
                          Đặt hàng <i className="fa fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
