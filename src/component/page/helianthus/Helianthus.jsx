import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { clothes } from "../../../data";
import Carousel from "react-bootstrap/Carousel";

export default function FeMale() {
  useEffect(() => {
    document.title = "Helianthus - chỉ từ 49k";
  }, []);
  return (
    <>
      <Carousel
        className="ship-price"
        interval={5000}
        indicators={false}
        controls={false}
        slide={true}
        style={{cursor: 'pointer'}}
      >
        <Carousel.Item>
          <div className="bg-dark p-2 text-white text-center">
            Ship mọi nơi giá chỉ 10.000đ
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-dark p-2 text-white text-center">
            Thời gian kết thúc: {new Date().getDate()}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-dark p-2 text-white text-center">
            Đồng 49K - 99K - 199K - 299K - 399k
          </div>
        </Carousel.Item>
      </Carousel>

      <Carousel
        className="ship-price"
        interval={9000}
        indicators={false}
        controls={false}
        slide={true}
      >
        <Carousel.Item>
          <img
            src="https://sss-dashboard.leanservices.work/upload/8-2022/1661392936316.jpeg"
            alt="49k"
            className="w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://sss-dashboard.leanservices.work/upload/8-2022/1660796306935.jpeg"
            alt="49k"
            className="w-100"
          />
        </Carousel.Item>
      </Carousel>

      <div className="text-center h2 pt-5">ĐỒNG GIÁ TỪ 49K</div>
      <div className="d-flex flex-wrap" style={{ padding: "1%" }}>
        {clothes.map((item) => (
          <div
            key={item.id}
            className="col-xxl-3 col-lg-4 col-md-6 my-1 home__product"
            style={{ padding: "2%" }}
          >
            <Link to={`/products-${item.id}`}>
              <div className="position-relative">
                <img
                  src={item.imgURL}
                  alt="product img"
                  className="img-fluid"
                />
                <div
                  className="position-absolute text-white text-center"
                  style={{
                    background: "#9d2b2b",
                    top: "0",
                    right: "0",
                    padding: "10px 0",
                    width: "60px",
                    fontWeight: "550",
                    fontSize: "16px",
                  }}
                >
                  {item.percentDiscount}%
                </div>
              </div>
            </Link>
            <div className="detail">
              <div className="info mt-2">
                <Link
                  to={`/products-${item.id}`}
                  className="my-1"
                  style={{
                    textDecoration: "none",
                    color: "dimgray",
                    fontSize: "160%",
                  }}
                >
                  {item.name}
                </Link>
                <p
                  className="mb-0"
                  style={{ color: "black", fontWeight: "550" }}
                >
                  {(
                    item.price -
                    (item.percentDiscount * item.price) / 100
                  ).toFixed(3)}
                  <span className="currency-symbol">₫</span>
                  <span
                    style={{
                      color: "#919191",
                      marginLeft: "6%",
                      fontSize: "85%",
                    }}
                    className="text-decoration-line-through"
                  >
                    {item.price}
                    <span className="currency-symbol">₫</span>
                  </span>
                </p>
                <p>+{item.color.length} màu</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
