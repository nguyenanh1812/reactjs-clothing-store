import React, { useState } from 'react'
import './slide.css'
import { newShirts } from './data'

export default function Slide() {
  // const [listShirt, setList] = useState(newShirts.filter((shirt)=> shirt.forMan))
  const [man, setForMan] = useState(true)

  const genderChange = () => {
    setForMan(
      !man
    )
    // setList(
    //   newShirts.filter((shirt)=> !shirt.forMan)
    // )
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
              <h4 className="text-center mt-3">{shirt.name}</h4>
              <p className="text-center">Giá: {shirt.price} đ</p>
            </div>
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
