import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../header/Header'
import NewShirts from '../newShirts/NewShirts'
import WeeklyBest from '../weeklyBest/WeeklyBest';
import './home.css'

export default function Home({clothes}) {
  return (
    <>
      <Header />

      {/* ship */}
      <Carousel className='ship-price' interval={5000} indicators={false} controls={false} slide={true}>
        <Carousel.Item>
          <div className="bg-dark p-2 text-white text-center">Đóng giá ship chỉ 30.000đ cho toàn quốc</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-dark p-2 text-white text-center">Ưu đãi giảm giá 10.000đ cho đơn trả trước</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-dark p-2 text-white text-center">Đóng giá ship chỉ 10.000đ cho đơn HN và SG</div>
        </Carousel.Item>
      </Carousel>

      {/* <!-- banner top --> */}
      <Carousel variant="dark" interval={6000} indicators={false} slide={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/7-2022/1657272384575.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Siêu Sale tháng 9</h5>
            <p>Áp dụng cho hầu hết các mặt hàng áo polo và quần âu</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/7-2022/1657247385857.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Đa dạng mẫu mã</h5>
            <p>Tối giản nhưng sang trọng lịch thiệp</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/7-2022/1657248131185.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Thoải mái phá cách</h5>
            <p>Nhiều mẫu áo đặc biệt phù hợp với nhiều phong cách</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/8-2022/1660026916137.jpeg"
            alt="4th slide"
          />
          <Carousel.Caption>
            <h5>Siêu sale mừng website mới</h5>
            <p>Áp dụng với tất cả các sản phẩm áo thun</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

      {/* <!-- for him & for her --> */}
      <div className="row row-responsive">
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
      <NewShirts />

      <div style={{ margin: '50px 0' }}>
        <Carousel interval={6000} indicators={false} slide={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/6-2022/1654482574066.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/6-2022/1654482697748.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sss-dashboard.leanservices.work/upload/8-2022/1659522122144.jpeg"
            alt="3th slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>

      <WeeklyBest clothes={clothes}/>

    </>
  )
}
