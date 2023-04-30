import React from 'react'
import { AiOutlineSafety } from "react-icons/ai"
import { RiMailSendLine } from "react-icons/ri"
import { GiConfirmed } from "react-icons/gi"
import { Container, Col ,Row } from "react-bootstrap"
import "./Results.css"

export default function Results() {
    return (
        <div className='results p-5 my-4'>
            <Container>
                <Row>

                    <Col 
                    className="box mb-sm-4 col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box">
                            <AiOutlineSafety className="icon" />
                        </div>
                        <h3 className="mt-3">امنیت در پرداخت</h3>
                        <p>پرداخت آنلاین با ایمن ترین درگاه ها انجام می شود</p>
                    </Col>

                    <Col 
                    className="box mb-sm-4 col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box">
                            <RiMailSendLine className="icon"  />
                        </div>
                        <h3 className="mt-3">ارسال به سراسر کشور</h3>
                        <p>ارسال به سراسر ایران، با کمترین هزینه</p>
                    </Col>
                    
                    <Col 
                    className="box mb-sm-4 col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box">
                            <GiConfirmed className="icon"/>  
                        </div>
                        <h3 className="mt-3">ضمانت کالای اصل</h3>
                        <p>با لایتکو از اصیل بودن کالای خود مطمئن باشید.</p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
