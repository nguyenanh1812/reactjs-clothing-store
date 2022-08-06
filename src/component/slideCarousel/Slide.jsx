import React, { useState } from 'react'
import './slide.css'
// import '../../assets/data'

const newShirts = [
  {
    id: 1,
    imgURL: 'https://xcimg.szwego.com/20210422/i1619089488_4713_0.jpg',
    name: 'Sumer Tee',
    price: '299.000',
    forMan: true
  },
  {
    id: 2,
    imgURL: 'https://cf.shopee.vn/file/01c6100f75597c4319f8714b579e74c6',
    name: 'Young Green',
    price: '199.000',
    forMan: true
  },
  {
    id: 3,
    imgURL: 'https://cf.shopee.vn/file/208902734743de35b8320af72a564863',
    name: 'W Shirt',
    price: '399.000',
    forMan: true
  },
  {
    id: 4,
    imgURL: 'https://johnlewis.scene7.com/is/image/JohnLewis/003443229',
    name: 'Jack Lane Shirt',
    price: '329.000',
    forMan: true
  },
  {
    id: 5,
    imgURL: 'https://cf.shopee.vn/file/bd7a93b3d0ff5ab27db7c881f54224df',
    name: 'W Black',
    price: '599.000',
    forMan: true
  },
  {
    id: 6,
    imgURL: 'https://cf.shopee.vn/file/3b254004d039877f2118877981ee91a3',
    name: 'Sơ mi Highway',
    price: '699.000',
    forMan: true
  },
  {
    id: 7,
    imgURL: 'https://product.hstatic.net/1000348721/product/3x2a1425_6a217cbc03d94993936f30e4b248718b_grande.jpg',
    name: 'BOTANIC SHIRT',
    price: '699.000',
    forMan: true
  },
  {
    id: 8,
    imgURL: 'https://product.hstatic.net/1000348721/product/img_6593_50393fcdb4274493a8518fa4cabfc752_master.jpg',
    name: 'AEFIT SHIRT',
    price: '799.000',
    forMan: true
  },
  {
    id: 9,
    imgURL: 'https://product.hstatic.net/1000348721/product/dsc_6618_91a4ff3abee2449aa054980cff581cef_master.jpg',
    name: '4PIECES JACKET',
    price: '999.000',
    forMan: true
  },
  {
    id: 10,
    imgURL: 'https://product.hstatic.net/1000348721/product/dsc_7578__1__064e74485f224f9986e26514c6550242_master.jpg',
    name: 'AURORA VARSITY JACKET',
    price: '1.299.000',
    forMan: true
  },
  {
    id: 11,
    imgURL: 'https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2021/08/ao-so-mi-nu-dep-nhat-7-jpg-1628502552-09082021164912.jpg',
    name: 'Sơ mi đen',
    price: '199.000',
    forMan: false
  },
  {
    id: 12,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/18.16-555x710.jpg',
    name: 'MilkTea Tee',
    price: '199.000',
    forMan: false
  },
  {
    id: 13,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/20.8-555x710.jpg',
    name: 'ViVi m-shirt',
    price: '339.000',
    forMan: false
  },
  {
    id: 14,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/15.11-380x480.jpg',
    name: 'Sơ Mi cổ tròn',
    price: '299.000',
    forMan: false
  },
  {
    id: 15,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/22.9.jpg',
    name: 'Ren Shirt',
    price: '299.000',
    forMan: false
  },
  {
    id: 16,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/26.1-555x710.jpg',
    name: 'Sumer Flower',
    price: '99.000',
    forMan: false
  },
  {
    id: 17,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/31.1.jpg',
    name: 'Shirt ANOMA-1',
    price: '299.000',
    forMan: false
  },
  {
    id: 18,
    imgURL: 'https://xcimg.szwego.com/20210422/i1619089488_4713_0.jpg',
    name: 'Sumer Tee',
    price: '259.000',
    forMan: false
  },
  {
    id: 19,
    imgURL: 'https://yishop.com.vn/wp-content/uploads/2022/05/28.13-555x710.jpg',
    name: 'White SLux',
    price: '799.000',
    forMan: false
  },
  {
    id: 20,
    imgURL: 'https://5.imimg.com/data5/TV/IU/MY-67054716/sassy-girl-t-shirt-with-tie-up-cutout-500x500.jpg',
    name: 'BI BQ',
    price: '389.000',
    forMan: false
  },
]

export default function Slide() {
  const [man, setForMan] = useState(false)

  const genderChange = () => {
    setForMan(
      !man
    )
  }

  return (
    <>
      <div className="new-clothes">
        <div className="text-center mb-2">
          <div className="new-clothes__header"> WHAT'S NEW</div>
          <div className="new-clothes__link">
            <span className="clothes__link--hover">
              <div className="new-clothes__link--item" onClick={genderChange}>For him {
                  man &&
                <span className="active-link-new"></span>
              }</div>
            </span>
            <span className="clothes__link--hover">
              <div className="new-clothes__link--item" onClick={genderChange}>For her {
                  !man &&
                <span className="active-link-new"></span>
              }</div>
            </span>
          </div>
        </div>
        <div className="owl-carousel owl-theme" style={{ margin: "30px 0" }}>
          {newShirts.map((shirt) => (
            // shirt.forMan === man &&
            <div key={shirt.id} className="item">
              <img style={{ height: '550px' }} src={shirt.imgURL} alt='shirt img' />
              <h4 className="text-center">{shirt.name}</h4></div>
          ))}
        </div>

        <div className="slider_nav">
          <i className="fas fa-chevron-circle-right am-next h1"></i>
          <i className="fas fa-chevron-circle-left am-prev h1"></i>
        </div>
      </div>



    </>
  )
}
