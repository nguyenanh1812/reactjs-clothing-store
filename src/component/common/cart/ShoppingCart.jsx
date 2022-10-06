import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { orderListSelector } from "../../../redux/selectors";
import ItemCart from "./ItemCart";

export default function ShoppingCart() {
  // const [orderList, setOrderList] = useState(useSelector(orderListSelector));
  const [orderList, setOrderList] = useState();
  const [bill, setBill] = useState({
    productList: [],
    voucher: "",
    discount: 0,
    total: 0,
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("clothingKey")) !== []) {
      setOrderList(JSON.parse(localStorage.getItem("clothingKey")));
    }
  }, []);

  const updateCart = (id, color, size) => {
    console.log(id, color, size);
    // localStorage.setItem()
    // setOrderList(JSON.parse(localStorage.getItem("clothingKey")));
  };

  const deleteItem = (product) => {
    const removeIndex = orderList.findIndex((e) => e.id === product.id);
    const cartStorage = JSON.parse(localStorage.getItem("clothingKey"));
    cartStorage.splice(removeIndex, 1);
    setOrderList(cartStorage);
    if (!cartStorage.length) {
      return localStorage.removeItem("clothingKey");
      console.log(2)
    }
    return localStorage.setItem("clothingKey",  JSON.stringify(cartStorage));
  };

  const updateBill = (product) => {
    const list2 = [...list];
    if (list.find((e) => e.id === product.id)) {
      const removeIndex = list.findIndex((e) => e.id === product.id);
      list2.splice(removeIndex, 1);
      return setList([...list2]);
    }
    return setList([...list2, product]);
  };

  useEffect(() => {
    setBill({
      productList: [...list],
      voucher: "",
      discount: 0,
      total: [...list].reduce((sum, e, i) => sum + e.total * 1, 0),
    });
  }, [list]);

  return (
    <>
      <h3 className="container mt-5 pt-5">|Giỏ hàng</h3>
      {!orderList ? (
        <div className="container h3 text-danger"> Chưa có sản phẩm nào</div>
      ) : (
        <div className="text-black" style={{ minHeight: "500px" }}>
          <div className="container py-2">
            <table className="table">
              <thead>
                <tr
                  className="table-active align-middle"
                  style={{ height: "60px" }}
                >
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input mt-0"
                      style={{ boxShadow: "none" }}
                    />
                  </th>
                  <th>Sản phẩm</th>
                  <th>Phân loại hàng</th>
                  <th>Đơn Giá</th>
                  <th>Số lượng</th>
                  <th>Số tiền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item) => (
                  <ItemCart
                    key={item.id}
                    item={item}
                    updateCart={updateCart}
                    updateBill={updateBill}
                    deleteItem={deleteItem}
                  />
                ))}
              </tbody>
            </table>
            <div
              className="position-sticky d-flex justify-content-between align-items-center text-black p-3"
              style={{
                height: "100px",
                background: "rgb(245 245 245)",
                bottom: 0,
              }}
            >
              <div className="d-flex align-items-center justify-content-start">
                <input
                  type="checkbox"
                  className="form-check-input mt-0 me-2"
                  style={{ boxShadow: "none" }}
                  name="allP"
                />
                <label htmlFor="allP">Chọn tất cả</label>
              </div>
              <div className="text-danger" style={{ cursor: "pointer" }}>
                Xóa
              </div>
              <div className="w-75 d-flex align-items-center justify-content-start">
                <div className="w-75">
                  Tổng thanh toán({bill.productList.length} sản phẩm){" "}
                  <span>{bill.total.toFixed(3)} VNĐ</span>
                </div>
                <div
                  className="w-25"
                  style={{ color: "orange", cursor: "pointer" }}
                >
                  Sử dụng voucher
                </div>
                <div className="w-50">
                  <button className="btn btn-success btn-sm w-100">
                    Mua Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
