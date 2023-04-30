import React from 'react'
import Article from '../Article/Article'
import articleData from '../ArticleData'
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Articles() {

    const [boxInfo, setBoxInfo] = useState(articleData)

    return (
        <>

            <hr className="mt-3" />
            <div className="container my-4" dir="rtl">
                <p
                    style={{
                        borderBottom: '2px solid rgb(255, 166, 0)',
                        width:200,
                        fontSize:'20px',
                    }}
                >
                    مقاله های لایتکو
                </p>
            </div>
            <Container className='mt-3 d-flex justify-content-evenly align-items-center flex-wrap'>
                <Row>
                    {boxInfo.map(box => (
                        <div className="col-lg-2 col-12 col-md-4">
                            <Article {...box} key={box.id} />
                        </div>
                    ))}
                </Row>
            </Container>
            <hr className='mt-4' />
        </>
    )
}
