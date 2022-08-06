import React from 'react'
import Header from '../header/Header'
import Slide from '../slideCarousel/Slide'
import './home.css'

export default function Home() {
  return (
    <>
      <Header />

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="bg-dark p-2 text-white text-center">Đóng giá ship chỉ 10.000đ cho đơn HN và SG</div>
          </div>
          <div className="carousel-item">
            <div className="bg-dark p-2 text-white text-center">Ưu đãi giảm giá 10.000đ cho đơn trả trước</div>
          </div>
          <div className="carousel-item">
            <div className="bg-dark p-2 text-white text-center">Đóng giá ship chỉ 30.000đ cho toàn quốc</div>
          </div>
        </div>
      </div>

      {/* <!-- banner top --> */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://sss-dashboard.leanservices.work/upload/7-2022/1657272384575.jpeg"
              className="d-block w-100" alt="img1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Siêu Sale tháng 9</h5>
              <p>Áp dụng cho hầu hết các mặt hàng áo polo và quần âu</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://sss-dashboard.leanservices.work/upload/7-2022/1657247385857.jpeg"
              className="d-block w-100" alt="img2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Đa dạng mẫu mã</h5>
              <p>Tối giản nhưng sang trọng lịch thiệp</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://sss-dashboard.leanservices.work/upload/7-2022/1657248131185.jpeg"
              className="d-block w-100" alt="img3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Thoải mái phá cách</h5>
              <p>Nhiều mẫu áo đặc biệt phù hợp với nhiều phong cách</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- for him & for her --> */}
      <div className="row">
        <div className="col-sm-6">
          <div className="bg-for-him-her"
            style={{ backgroundImage: "url('https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448364/item/vngoods_62_448364.jpg?width=1600&impolicy=quality_75')" }}>
            <div className="text-center">FOR HIM</div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="bg-for-him-her"
            style={{ backgroundImage: "url('https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/448809/item/vngoods_62_448809.jpg?width=1600&impolicy=quality_75')" }}>
            <div className="text-center">FOR HER</div>
          </div>
        </div>
      </div>

      {/* <!-- show slide new Clothes --> */}
      <Slide />

      <div style={{ margin: '50px 0' }}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://sss-dashboard.leanservices.work/upload/6-2022/1654482697748.jpeg"
                className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://sss-dashboard.leanservices.work/upload/6-2022/1654482574066.jpeg"
                className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
