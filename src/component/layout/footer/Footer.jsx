import React from "react";
import "./footer.css";
import styled from 'styled-components'

const ContainerDiv = styled.div`
  margin: 0 5%;
  padding: 3% 0 1% 0;
`

export default function Footer() {
  return (
    <footer>
      <ContainerDiv>
        <div className="row">
          <div className="col-lg-3 ps-0">
            <h5 className="footer--item__title">SSelegant</h5>
            <p>
              Với thông điệp "Refined Life", SSelegant mong muốn <br />
              đem đến cho khách hàng một lối sống tinh gọn
              <br /> bằng các sản phẩm thời trang tinh tế.
            </p>
          </div>
          <div className="col-lg-3 ps-0">
            <h5 className="footer--item__title">CHI NHÁNH HÀ NỘI</h5>
            <p>
              77 - D14, ngõ 4B Hà nội <br />
              99 - D9, ngõ 4B HCHN-XML-XZ <br />
              88 - D5, ngõ 4B HCHN
            </p>
            <h5 className="footer--item__title">CHI NHÁNH HCM</h5>
            <p>99 - D18, ngõ 4B HỒ CHÍ MINH</p>
          </div>
          <div className="col-lg-3 ps-0">
            <h5 className="footer--item__title">CHÍNH SÁCH</h5>
            <p>Hướng dẫn đổi trả</p>
            <h5 className="footer--item__title">Liên hệ</h5>
            <p>
              Hotline: 0399606xxx <br />
              Email: nguyenanh1812zxc@gmail.com
            </p>
          </div>
          <div className="col-lg-3 ps-0">
            <h5 className="footer--item__title">SOCIAL</h5>
            <p className="social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-tiktok"></i>
            </p>
          </div>
        </div>
        <div className="row my-1 py-2" style={{ borderTop: "1px solid black" }}>
          Copyright ⓒ by nguyenanh1812zxc@gmail.com
        </div>
      </ContainerDiv>
    </footer>
  );
}
