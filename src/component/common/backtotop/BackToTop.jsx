import React, { useEffect, useState } from 'react'
import './backtotop.css'

export default function BackToTop() {
  const [toTop, setToTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        return setToTop(true)
      }
      return setToTop(false)
      // console.log(toTop)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  const toTop2 = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    console.log(1);
  }
  return (
    toTop &&
    (<div className='BtnBackToTop' onClick={toTop2} ><i className="fas fa-chevron-circle-up"></i></div>)

  )
}
