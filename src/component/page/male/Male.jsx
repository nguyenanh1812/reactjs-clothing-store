import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clothes } from "../../../data";
import "../../../assets/filter.css";

export default function FeMale() {
  const [list, setList] = useState(clothes.filter((e) => e.forMan));
  useEffect(() => {
    document.title = "Quần áo cho nam";
  }, []);

  const handleFilter = (e) => {
    switch (e.target.innerText) {
      case "Áo":
        setList(clothes.filter((e) => e.forMan).filter((e) => e.typeId === 1));
        break;
      case "Quần":
        setList(clothes.filter((e) => e.forMan).filter((e) => e.typeId === 2));
        break;
      case "Túi sách":
        setList(clothes.filter((e) => e.forMan).filter((e) => e.typeId === 3));
        break;
      case "Mũ":
        setList(clothes.filter((e) => e.forMan).filter((e) => e.typeId === 4));
        break;
      case "Váy":
        setList(clothes.filter((e) => e.forMan).filter((e) => e.typeId === 5));
        break;
      default:
        alert("Có lỗi gì đó đang xảy ra!");
    }
  };

  const handleSort = (e) => {
    switch (e.target.innerText) {
      case "Giá: tăng dần":
        setList(
          [...list].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        );
        break;
      case "Giá: giảm dần":
        setList(
          [...list].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        );
        break;
      case "A-Z":
        setList([...list].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "Z-A":
        setList([...list].sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case "Cũ nhất":
        setList([...list].sort((a, b) => parseFloat(a.id) - parseFloat(b.id)));
        break;
      case "Mới nhất":
        setList(
          [...list].sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
        );
        break;
      case "Bán chạy nhất":
        setList([...list].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "Giảm giá nhiều nhất":
        setList(
          [...list].sort((a, b) => parseFloat(b.percentDiscount) - parseFloat(a.percentDiscount))
        );
        break;
      default:
        alert("Có lỗi gì đó đang xảy ra!");
    }
  };
  return (
    <>
      <div className="container pt-5" style={{ padding: "0 32px 0 32px" }}>
        <div className="d-flex justify-content-between">
          <h2>Quần áo nam</h2>
          <div className="d-flex ">
            <div className="px-4 filter-wrap">
              <div className="filter-category">
                Lọc danh mục <i className="fas fa-chevron-down"></i>
                <ul onClick={handleFilter}>
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
                <ul onClick={handleSort}>
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

        {list === [] && <div> Sản phẩm đang được cập nhật!</div>}
      </div>
    </>
  );
}
