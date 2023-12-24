import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
let width = 700;
let height = 800;
if (typeof window !== 'undefined') {
    // Truy cập window chỉ khi ở môi trường client-side
    width = window.innerWidth;
    height = window.innerHeight;
} else {
    // Xử lý khi không có window (môi trường server-side)
    // Đây là nơi bạn có thể thiết lập giá trị mặc định hoặc xử lý khác
    // Ví dụ:
    width = 800; // Giá trị mặc định cho width khi không có window
    height = 600; // Giá trị mặc định cho height khi không có window
}
const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1701441139915_desf.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1700994295451_web.jpg'
        }
    ])



    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {
                banners.map((banner, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image src={banner.imgUrl} alt="" width={width} height={height / 2}
                                style={{
                                    objectFit: "cover"
                                }} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default HomeSlider