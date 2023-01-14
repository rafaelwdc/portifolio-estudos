import React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carrossel.css'

export default function Carrossel({ settings, children }) {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                {...settings}
            >
                {children}
            </Swiper>
        </>
    )
}