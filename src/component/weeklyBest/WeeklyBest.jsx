import React from 'react'
import './weeklyBest.css'
import { useState } from 'react'

export default function WeeklyBest() {
    const [man, setForMan] = useState(true)

    const genderChange = () => {
        setForMan(
            !man
        )
    }
    return (
        <>
            {/* <!-- WEEKLY BEST --> */}
            <div style={{ background: "lightgray" }}>
                <div className="container-fluid p-2">
                    <div className="text-center mb-2">
                        <div className="new-clothes__header">WEEKLY BEST</div>
                        <div className="new-clothes__link">
                            <span className="clothes__link--hover text-center">
                                {!man ?
                                    <div className="new-clothes__link--item" onClick={genderChange} style={{ color: "black" }}>For him</div>
                                    :
                                    <div className="new-clothes__link--item" style={{ color: "black" }}>For him<span className="active-link-new"></span></div>
                                }
                            </span>
                            <span className="clothes__link--hover text-center">
                                {man ?
                                    <div className="new-clothes__link--item" onClick={genderChange} style={{ color: "black" }}>For her</div>
                                    :
                                    <div className="new-clothes__link--item" style={{ color: "black" }}>For her <span className="active-link-new"></span></div>
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex p-3 flex-wrap'>
                    <div className="product w-25 m-0 p-0 px-3">
                        <div className="">
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1655470074135.jpeg" alt="product img" className='img-fluid' />
                        </div>
                        <div className="detail">
                            <div className="info">
                                <a href="#product-link" className='h4' style={{ color: "black", textDecoration: "none" }}>smart pants</a>
                                <p className='my-0'>419.000 <span className="currency-symbol">₫</span></p>
                                <p>+4 màu</p>
                            </div>
                        </div>
                    </div>
                    <div className="product w-25 m-0 p-0 px-3">
                        <div className="">
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1655470074135.jpeg" alt="product img" className='img-fluid' />
                        </div>
                        <div className="detail">
                            <div className="info">
                                <a href="#product-link" className='h4' style={{ color: "black", textDecoration: "none" }}>smart pants 2</a>
                                <p className='my-0'>419.000 <span className="currency-symbol">₫</span></p>
                                <p>+4 màu</p>
                            </div>
                        </div>
                    </div>
                    <div className="product w-25 m-0 p-0 px-3">
                        <div className="">
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1655470074135.jpeg" alt="product img" className='img-fluid' />
                        </div>
                        <div className="detail">
                            <div className="info">
                                <a href="#product-link" className='h4' style={{ color: "black", textDecoration: "none" }}>smart pants3</a>
                                <p className='my-0'>419.000 <span className="currency-symbol">₫</span></p>
                                <p>+4 màu</p>
                            </div>
                        </div>
                    </div>
                    <div className="product w-25 m-0 p-0 px-3">
                        <div className="">
                            <img src="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/062022/1655470074135.jpeg" alt="product img" className='img-fluid' />
                        </div>
                        <div className="detail">
                            <div className="info">
                                <a href="#product-link" className='h4' style={{ color: "black", textDecoration: "none" }}>smart pants4</a>
                                <p className='my-0'>419.000 <span className="currency-symbol">₫</span></p>
                                <p>+4 màu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
