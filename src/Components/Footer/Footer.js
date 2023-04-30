import React from 'react'
import "./Footer.css"
import { AiFillPhone, AiOutlineMail } from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import { BsWhatsapp, BsTelegram } from "react-icons/bs"

export default function Footer() {
    return (
        <>
            <footer className='d-flex justify-content-evenly flex-row' dir='rtl'>
                <div className="row">

                    <div className="col-lg-4 col-12 right d-flex flex-column  justify-content-center">
                        <div className="brand">
                            <span style={{ color: 'rgb(255, 166, 0)' }}> لایت</span>
                            <span >کو</span>
                        </div>
                        <div className="numbers">
                            <p><AiFillPhone className="icon" /> تلفن: 123-456-789</p>
                            <p><AiFillPhone className="icon" /> تلفن دفتر مرکزی: 123-456-789</p>
                        </div>
                        <div className="address">
                            <span>
                                <HiLocationMarker className="icon" />اصفهان، نظر غربی، کوچه 47، پلاک 17
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 center">
                        <div className="title">
                            <p style={{ fontSize: '20px' }} >ارتباط با مرکز فروش</p>
                        </div>
                        <div className="numbers">
                            <p> <BsWhatsapp className="icon whatsapp" />واتساپ: 091234567</p>
                            <p><BsWhatsapp className="icon whatsapp" />واتساپ: 091234897</p>
                            <p><BsTelegram className="icon telegram" />تلگرام: 091234897</p>
                            <p><AiOutlineMail className="icon email" />ایمیل: info@lightco.ir</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 left">
                        <div className="img-box">
                            <img alt="نشان ثبت رسانه های دیجیتال" src="../images/copyright.png" />
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                کلیه ی حقوق مادی و معنوی متعلق به لایتکو است.
            </div>
        </>
    )
}
