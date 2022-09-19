import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Alerts({setAlertSuccess, name}) {
  return (
    <div className="position-fixed alert-hidden" style={{ top: "100px", right: "40px", zIndex: '99999'}}>
        <Alert variant="success" onClose={() => setAlertSuccess(false)} dismissible>
        <Alert.Heading style={{fontSize: '16px'}}>Đặt hàng thành công sản phẩm {name}</Alert.Heading>
        <hr />
        <p style={{fontSize: '12px'}}>
          Mời bạn vào giỏ hành để xem chi tiết!
        </p>
      </Alert>
    </div>
  )
}
