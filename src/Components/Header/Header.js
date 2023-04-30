import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <>
            <header>
                <div className="row">
                    <div className="container">
                        <div className="col right">

                            <h1>با
                                <a href="#">لایتکو</a>آسان زندگی کنید
                            </h1>
                            <h6 className='mt-2'>لایتکو با بیش از 10 سال تجربه در خدمت شما</h6>

                            <div className="more-info">
                                <p className='p-5 p-md-2'>این یک مکان برای نوشتن متن های تستی، برای معرفی کسب و کار خود یا خدماتی که ارائه می دهید است.
                                    این یک مکان برای نوشتن متن های تستی، برای معرفی کسب و کار خود یا خدماتی که ارائه می دهید است.

                                اندازه، رنگ و سایز متن شما قابل تغییر است و کاملا بستگی به سلیقه ی شما دارد.</p>
                            </div>

                            <button className="btn btn-warning">بیشتر بدانید</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
