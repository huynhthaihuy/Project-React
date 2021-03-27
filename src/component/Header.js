import React from 'react';
// import '../css/css/animate.css';
// import '../css/css/green.css';
// import '../css/css/huy.css';
// import '../css/css/new.css';
// import '../css/css/new1.css';
// import '../css/css/bootstrap.css';
// import '../css/js/jquery.colorbox-min';
const Header = () =>{
    return (
        <div>
            <div id="header">
            <div class="container">
            <div class="pull-left auto-width-left mt-2">
					<ul class="top-menu menu-beta l-inline">
						<li><a href="#"><i class="fa fa-home"></i> K448/67 Trưng Nữ Vương-Đà Nẵng</a></li>
						<li><a href="#"><i class="fa fa-phone"></i> 0905 463 037</a></li>
					</ul>
				</div>
                <div class="pull-right auto-width-right mt-2">
					<ul class="top-details menu-beta l-inline">
                    <li><a href="#">Chào bạn</a></li>
                    <li><a href="{{route('users.logout')}}">Đăng xuất</a></li>
                    <li><a href="/register">Đăng kí</a></li>
						<li><a href="/login">Đăng nhập</a></li>
					</ul>
				</div>
				<div class="clearfix"></div>
                </div>
				<div class="Header1 container-fluid d-flex d-none d-xl-block align-items-center bg-light">
        <div class="row">
            <div class="col-2">
                <img src="source\assets\dest\images\tải xuống.jpg" height="50px" class="w-50" />
            </div>
            <div class="col-4 d-flex justify-content-start">
            <nav class="main-menu">
                <ul class="nav mt-2">
                <li><a href="">Trang chủ</a></li>
                <li><a href="#">Loại Sản phẩm</a>
							<ul class="sub-menu">
								<li><a href=""></a></li>
							</ul>
						</li>
                        <li><a href="/lienhe">Liên hệ</a></li>
                </ul>
            </nav>
            </div>
            <div class="col-4 d-flex justify-content-end">
            <form role="search" method="get" id="searchform" action="">
					        <input type="text" value="" name="search" id="s" placeholder="Nhập từ khóa..." class="mt-2" />
					        <button class="fas fa-search mb-1" type="submit" id="searchsubmit"></button>
						</form>
			</div>
			<div class="col-2 d-flex justify-content-center mt-3">
						<div class="cart">
							<div class="beta-select"><i class="fa fa-shopping-cart"></i> Giỏ hàng<i class="fa fa-chevron-down"></i></div>
							<div class="beta-dropdown cart-body">
								<div class="cart-item">
								<a class="cart-item-delete" href=""><i class="fa fa-times"></i></a>
									<div class="media">
										<a class="pull-left" href="#"><img src="source/image/product/" alt=""/></a>
										<div class="media-body">
										<span class="cart-item-title"></span>
										<span class="cart-item-amount"><span></span></span>
										</div>
									</div>
								</div>

								<div class="cart-caption">
								<div class="cart-total text-right">Tổng tiền: <span class="cart-total-value"></span></div>
									<div class="clearfix"></div>

									<div class="center">
										<div class="space10">&nbsp;</div>
										<a href="{{route('dathang')}}" class="beta-btn primary text-center">Đặt hàng <i class="fa fa-chevron-right"></i></a>
									</div>
								</div>
							</div>
						</div></div>
        </div>
        
        </div>
        </div>
        <link rel="stylesheet" href="source/assets/dest/css/styles1.css"></link>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"></link>
	<link rel="stylesheet" href="source/assets/dest/vendors/colorbox/example3/colorbox.css"></link>
	<link rel="stylesheet" href="source/assets/dest/rs-plugin/css/settings.css"></link>
	<link rel="stylesheet" href="source/assets/dest/rs-plugin/css/responsive.css"></link>
	<link rel="stylesheet" title="style" href="source/assets/dest/css/style.css"></link>
	<link rel="stylesheet" href="source/assets/dest/css/animate.css"></link>
	<link rel="stylesheet" title="style" href="source/assets/dest/css/huy.css"></link>
    <link rel="stylesheet" title="style" href="source/assets/dest/css/new1.css"></link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js " integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 " crossorigin="anonymous "></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js " integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy " crossorigin="anonymous "></script>
            <script src="source/assets/dest/css/new.js "></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="source/assets/dest/vendors/jqueryui/jquery-ui-1.10.4.custom.min.js"></script>
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
	 <script src="source/assets/dest/vendors/colorbox/jquery.colorbox-min.js"></script>
	<script src="source/assets/dest/vendors/dug/dug.js"></script>
	<script src="source/assets/dest/js/scripts.min.js"></script>
    <script src="resources/asset/js/pages/routes/routes.js"></script>
    
        </div>
        
    )
}
export default Header;