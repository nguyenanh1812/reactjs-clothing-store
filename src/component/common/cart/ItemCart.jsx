import React, { useState } from "react";
import './itemCart.css'

export default function ItemCart({ item, updateCart }) {
  const [color, setColor] = useState(item.color);
  const [size, setSize] = useState(item.size);
  const [display, setDisplay] = useState(false);

  const handleSelectColor = (event) => {
    setColor(event.target.value);
    console.log(color);
  };

  const handleSelectSize = (event) => {
    setSize(event.target.value);
    console.log(size);
  };

  const handleDelete = () => {
    alert(item.id);
  };

  const handleUpdate = () => {
    updateCart(item.id, color, size)
  }

  return (
    <tr
      key={item.id}
      className="my-2 p-4 align-middle"
      style={{
        height: 100,
      }}
    >
      <td>
        <input type="checkbox" className="form-check-input mt-0" />
      </td>
      <td>{item.name}</td>
      <td>
        <div className="d-flex align-items-start position-relative" style={{ gap: 5, cursor: "pointer" }}>
          <div onClick={() => setDisplay(!display)}>
            Phân loại hàng: {item.color} {item.size}
          </div>
          <span className={display ? 'transform-reverse' : ''} onClick={() => setDisplay(!display)}>
            <i className="fas fa-sort-down ms-2" style={{ fontSize: 20 }}></i>
          </span>
          {display && (
            <div className="position-absolute cart-set-size-color">
              <p className="d-flex h5 flex-wrap pt-2">
                {item.listColor.length} màu:
                {item.listColor.map((c, index) => (
                  <div
                    className="checked-input ps-1"
                    key={index}
                    onClick={handleSelectColor}
                  >
                    {c === color ? <input
                      type="radio"
                      name="color"
                      id={`radio-${c}`}
                      value={c}
                      defaultChecked={true}
                    />
                      : <input
                        type="radio"
                        name="color"
                        id={`radio-${c}`}
                        value={c}
                      />
                    }
                    <label htmlFor={`radio-${c}`}>
                      <span className={`bg-${c} bg-color`}></span>
                    </label>
                  </div>
                ))}
              </p>
              <p className="d-flex h5 flex-wrap mt-3 align-items-center">
                Kích cỡ:
                {item.listSize.map((s, index) => (
                  <div
                    className="checked-input ps-1"
                    key={index}
                    onChange={handleSelectSize}
                  >

                    {s === size ? <input
                      type="radio"
                      name="size"
                      id={`radio-${s}`}
                      value={s}
                      defaultChecked={true}
                    />
                      : <input
                        type="radio"
                        name="size"
                        id={`radio-${s}`}
                        value={s}
                      />
                    }
                    <label htmlFor={`radio-${s}`} className="bg-size">
                      <span className="text-center">{s}</span>
                    </label>
                  </div>
                ))}
              </p>
              <div className="d-flex mt-4">
                <button className="btn btn-danger btn-sm w-50 me-3" onClick={()=> setDisplay(false)}>Đóng</button>
                <button className="btn btn-success btn-sm w-50 ms-3" onClick={handleUpdate}>Cập nhật</button>
              </div>
            </div>
          )}
        </div>
      </td>
      <td>Giá sản phẩm: {item.price}</td>
      <td>Số lượng: {item.quantity}</td>
      <td>Tổng đơn hàng: {item.total} VNĐ</td>
      <td>
        <button className="btn btn-danger bg-danger" onClick={handleDelete}>
          Xóa
        </button>
        <button className="btn btn-warning bg-warning ms-2">Mua hàng</button>
      </td>
    </tr>
  );
}
