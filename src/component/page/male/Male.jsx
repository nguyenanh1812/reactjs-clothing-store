import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clothes } from "../../../data";
import "../../../assets/filter.css";

export default function FeMale() {
  const [list, setList] = useState(clothes.filter((e) => e.forMan));
  useEffect(() => {
    document.title = "Quần áo cho nam";
  }, []);
  return (
    <>
      <div className="container pt-5" style={{ padding: "0 32px 0 32px" }}>
        <div className="d-flex justify-content-between">
          <h2>Quần áo nam</h2>
          <div className="d-flex ">
            <div className="px-4 filter-wrap">
              <div className="filter-category">
                Lọc danh mục <i className="fas fa-chevron-down"></i>
                <ul>
                  <li>Áo</li>
                  <li>Quần</li>
                  <li>Túi sách</li>
                  <li>Mũ</li>
                </ul>
              </div>
            </div>
            <div className="filter-wrap">
              <div className="filter-category">
                Sắp xếp theo <i className="fas fa-chevron-down"></i>
                <ul>
                  <li>Giá: tăng dần</li>
                  <li>Giá: giảm dần</li>
                  <li>A-Z</li>
                  <li>Z-A</li>
                  <li>Cũ nhất</li>
                  <li>Mới nhất</li>
                  <li>Bán chạy nhất</li>
                  <li>Giảm giá nhiều nhất</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderBottom: "1px dashed #ccc" }}></div>
      </div>
      <div className="container d-flex flex-wrap mb-center">
        {list.map((item) => (
          <div
            key={item.id}
            className="col-xxl-3 col-lg-4 col-md-6 home__product"
            style={{ padding: "20px" }}
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
