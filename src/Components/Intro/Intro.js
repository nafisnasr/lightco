import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Intro() {
    return (
        <>
            <Container className="mt-5 d-flex align-items-center">
                <Row dir="rtl">
                    <Col className="col-md-7 col-lg-6 col-12 mb-sm-3">
                        <img className='col-12 rounded mb-4' src="./images/intro.jpg" alt="LightCo" />
                    </Col>
                    <Col className=" col-md-5 col-lg-6 col-12 d-flex align-items-center flex-column justify-content-center">
                        <h2 className="mt-md-3 mt-sm-3">انواع تجهیزات الکتریکی
                         را از تک لایت تهیه کنید
                        </h2>
                        <p className="p-4 p-md-3" style={{fontSize:'15'}}>
                            لایتکو الکتریک با به کارگیری دانش فنی مدرن و با بهره‌گیری از تجهیزات و ابزار آلات پیشرفته توانسته است محصولات مختلف الکتریکی از جمله انواع کلید و پریزها را تولید و به بازار عرضه نماید. صنایع لایتکو الکتریک با مشارکت و استفاده بهینه از منابع موجود و با تحقیق و نوآوری توانسته است گامی در راستای ارتقا سطح محصولات خود بردارد
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
