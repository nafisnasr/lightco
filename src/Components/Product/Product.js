import React from 'react'
import { Card, Button } from 'react-bootstrap'
import "./Product.css"
import {GiStarFlag} from "react-icons/gi"
import {IoColorPalette} from "react-icons/io5"
import {TbBrandAppgallery} from "react-icons/tb"
/* import {Link} from "react-router-dom"
 */
export default function Product(props) {
    return (
        <>
                <Card
                    className="d-flex align-items-center align-items-center m-3 cardbox">
                    <Card.Img variant="top" src={props.src} style={{ width: 160 }} />
                    <Card.Body>
                        <Card.Title dir="rtl">{props.title}</Card.Title>
                        <Card.Text dir="rtl">
                            <li style={{listStyleType:'none'}}><GiStarFlag style={{marginLeft:5}}/>کشور : {props.country}</li>
                            <li style={{listStyleType:'none'}}><IoColorPalette style={{marginLeft:5}}/>برند : {props.brand}</li>
                            <li style={{listStyleType:'none'}}><TbBrandAppgallery style={{marginLeft:5}}/>رنگ : {props.color}</li>
                        </Card.Text>
                        <Card.Text dir="rtl">{props.price} تومان</Card.Text>
                        <Button variant="warning" className="w-100">خرید</Button>
                    </Card.Body>
                </Card>
        </>
    )
}