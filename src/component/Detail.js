import React from "react";
import "../css/css/animate.css";
import "../css/css/green.css";
import "../css/css/huy.css";
import "../css/css/new1.css";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-responsive-carousel";
import Product from "../css/source/image/slide/Xiaomi-Black-Shark-4-600x600.jpg";
const Detail = () => {
  return (
    <div>
      <Header></Header>
      {/* Header Detail */}
      <div className="inner-header">
        <div className="container">
          <div className="pull-left">
            <h6 className="inner-title"></h6>
          </div>
          <div className="pull-right">
            <div className="beta-breadcrumb font-large">
              <a href="{{route('users.index')}}">Home</a> / <span>Product</span>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* Body Detail */}
      <div className="container">
        <div id="content">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-4">
                  <div className="ribbon-wrapper">
                    <div className="ribbon sale">Sale</div>
                  </div>
                  <img src={Product} alt="" height="250px" />
                  {/* <img src="{{asset('source/image/slide/Xiaomi-Black-Shark-4-600x600.jpg')}}" alt="" height="250px" className="ml-5"/> */}
                </div>
                <div className="col-sm-8">
                  <div className="single-item-body ml-5">
                    <p className="single-item-title">Xiao Mi Black Shark 4</p>
                    <p className="single-item-price">
                      {" "}
                      20.000.000
                      <span className="flash-del"></span>
                      <span className="flash-sale"></span>
                      <span className="flash-sale"></span>
                    </p>
                  </div>

                  <div className="clearfix"></div>
                  <div className="space20">&nbsp;</div>

                  <div className="single-item-desc">
                    <p></p>
                  </div>
                  <div className="space20">&nbsp;</div>

                  <p className="ml-5">Số Lượng:</p>
                  <div className="single-item-options ml-5">
                    <select className="wc-select" name="color">
                      <option>Số Lượng</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <a className="add-to-cart" href="{{route('users.add')}}">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>

              <div className="space40">&nbsp;</div>
              <div className="woocommerce-tabs">
                <ul className="tabs">
                  <li>
                    <a href="#tab-description">Description</a>
                  </li>
                </ul>

                <div className="panel" id="tab-description">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet.
                  </p>
                  <p>
                    Consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequaturuis autem vel eum iure
                    reprehenderit qui in ea voluptate velit es quam nihil
                    molestiae consequr, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur?{" "}
                  </p>
                </div>
                <div className="panel" id="tab-reviews">
                  <div id="fb-root"></div>
                  <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1version=v10.0"
                    nonce="cBm0bMMj"
                  ></script>
                  <div
                    className="fb-comments"
                    data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                    data-width="600"
                    data-numposts="5"
                  ></div>
                </div>
              </div>
              <div className="space50">&nbsp;</div>
              {/* Sản Phẩm Cùng Loại */}
              <div className="beta-products-list">
                <h4>Related Products</h4>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-item">
                      <div className="ribbon-wrapper">
                        <div className="ribbon sale">Sale</div>
                      </div>
                      <div className="single-item-header mt-5">
                        <a className="w-100 h-100" href="product.html">
                          <img src={Product} alt="" height="150px" />
                        </a>
                      </div>
                      <div className="single-item-body">
                        <p className="single-item-title">
                          Xiao Mi Black Shark 4
                        </p>
                        <p className="single-item-price">
                          {" "}
                          10.000.000
                          <span className="flash-del"></span>
                          <span className="flash-sale"></span>
                          <span className="flash-sale"></span>
                        </p>
                      </div>
                      <div className="single-item-caption">
                        <a
                          className="add-to-cart pull-left"
                          href="shopping_cart.html"
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                        <a className="beta-btn primary" href="product.html">
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Detail;
