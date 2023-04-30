import React from 'react'
import "./PageNavbar.css"
import { FiSettings, FiUser } from "react-icons/fi"
import { MdOutlineLightMode } from "react-icons/md"
import { SiInstagram, SiTelegram, SiYoutube } from "react-icons/si"
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"

export default function PageNavbar() {
    return (
        <>
            <div className="blank-box bg-light" >
                <div className="right">
                    <div className="setting-icon">
                        <FiSettings className="icon" />
                    </div>
                    <div className="login-icon">
                        <FiUser className="icon" />
                    </div>
                    <div className="theme-icon">
                        <MdOutlineLightMode className="icon" />
                    </div>
                </div>
                <div className="left mx-2">
                    <a href='#'>lightCo@gmail.com</a>
                    <div className="social">
                        <SiInstagram className='icon' />
                        <SiTelegram className='icon' />
                        <SiYoutube className='icon' />
                    </div>
                </div>
            </div>
            <Navbar bg="light" expand="lg" dir="rtl">
                <Container fluid>
                    <Navbar.Brand href="#" className="mx-3">lightCo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" dir="rtl">
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            dir="rtl"
                        >
                            <Nav.Link href="#action1">خانه</Nav.Link>
                            <Nav.Link href="#action2">خدمات</Nav.Link>
                            <NavDropdown dir='rtl' title="محصولات" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">تک</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    خانه
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    تزیینات
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action4">پرسنل</Nav.Link>
                            <Nav.Link href="#action5">همکاری با ما</Nav.Link>
                            <Nav.Link href="#action6">درباره ی ما</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-auto">
                            <Form.Control
                                type="search"
                                placeholder="تایپ کنید..."
                                className="me-2 mx-2"
                                aria-label="Search"
                                dir="rtl"
                            />
                            <Button variant="warning">جستجو</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
