import React from 'react'
import Product from '../Product/Product'
import { useState } from 'react'
import productInfo from '../../ProductInfo'
import { Container , Row} from "react-bootstrap"

export default function Shop() {
    let [products, setProducts] = useState(productInfo)
    return (
        <>
            <Container
                style={{
                    display: 'flex',
                    alignItems:'center',
                    justifyContent: 'space-evenly',
                    flexWrap:'wrap'
                }}
            >
                <Row>
                    {products.map(item => (
                        <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                            <Product {...item} key={item.id} />
                        </div>
                    ))}
                </Row>
            </Container>
        </>
    )
}
