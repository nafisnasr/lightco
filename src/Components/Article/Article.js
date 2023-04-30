import React from 'react'
import { Card } from "react-bootstrap"

export default function Article(props) {
    return (
        <>
            <Card style={{
                cursor:'pointer',
                margin:10
            }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Text dir="rtl">{props.title}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
