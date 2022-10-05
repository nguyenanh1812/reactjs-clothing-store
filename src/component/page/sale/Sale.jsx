import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clothes } from "../../../data";
import sale from '../../../assets/1010sale.png'

const listSale = clothes.filter((e) => e.percentDiscount).sort((a, b) => b.percentDiscount - a.percentDiscount);
export default function FeMale() {
  const [list, setList] = useState(listSale);

  useEffect(() => {
    document.title = "SS - Siêu Sale";
  }, []);

  const handleFilter = (e) => {
    switch (e.target.innerText) {
      case "Áo":
        setList(listSale.filter((e) => e.typeId === 1));
        break;
      case "Quần":
        setList(listSale.filter((e) => e.typeId === 2));
        break;
      case "Túi sách":
        setList(listSale.filter((e) => e.typeId === 3));
        break;
      case "Mũ":
        setList(listSale.filter((e) => e.typeId === 4));
        break;
      case "Váy":
        setList(listSale.filter((e) => e.typeId === 5));
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
        setList([...list].sort((a, b) => parseFloat(b.id) - parseFloat(a.id)));
        break;
      case "Bán chạy nhất":
        setList([...list].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "Giảm giá nhiều nhất":
        setList(
          [...list].sort(
            (a, b) =>
              parseFloat(b.percentDiscount) - parseFloat(a.percentDiscount)
          )
        );
        break;
      default:
        alert("Có lỗi gì đó đang xảy ra!");
    }
  };

  return (
    <>
      <img
        src="https://sss-dashboard.leanservices.work/upload/8-2022/1661392936316.jpeg"
        alt="49k"
        className="w-100"
        loading="lazy"
      />
      <div className="mx-5 mt-5 d-flex justify-content-between position-relative">
        <img src={sale} alt="" style={{top: 0, left: '50%', transform: 'translate(-50%)' }}  className="position-absolute img-fluid"/>
        <h2>Siêu Sale</h2>
        <div className="d-flex ">
          <div className="px-4 filter-wrap">
            <div className="filter-category">
              Lọc danh mục <i className="fas fa-chevron-down"></i>
              <ul onClick={handleFilter}>
                <li>Áo</li>
                <li>Quần</li>
                <li>Túi sách</li>
                <li>Mũ</li>
                <li>Váy</li>
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
      <div className="d-flex flex-wrap mb-center" style={{ padding: "1%" }}>
        {list.map((item) => (
          // {clothes.map((item) => (
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
                  loading="lazy"
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
