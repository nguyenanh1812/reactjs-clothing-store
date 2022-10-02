import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { orderListSelector } from "../../../redux/selectors";
import ItemCart from "./ItemCart";

export default function ShoppingCart() {
  // const [orderList, setOrderList] = useState(useSelector(orderListSelector));
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("clothingKey"))) {
      setOrderList(JSON.parse(localStorage.getItem("clothingKey")));
    }
  }, []);

  return (
    <>
      <h3 className="container mt-5 pt-5">|Giỏ hàng</h3>
      {!orderList ? (
        <div> Chưa có sản phẩm nào</div>
      ) : (
        <div className="text-black" style={{ minHeight: "500px" }}>
          <div className="container py-2">
            <table className="table">
              <thead>
                <tr class="table-active align-middle" style={{height: '60px'}}>
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input mt-0"
                      style={{ boxShadow: "none" }}
                    />
                  </th>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Phân loại hàng</th>
                  <th scope="col">Đơn Giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Số tiền</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item) => (
                  <ItemCart item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
