import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Tips() {
    return ( 
        <Swiper id="tips" loop={true} pagination={true} modules={[Pagination]} className="max-w-[1440px] m-auto px-16 bg-[#5D5D5D] " >
            <SwiperSlide className="tip gap-8 p-8 ">
                <img src="/Crish.png" alt="" />
                <p className=" bg-[#484848] px-6 pt-2 pb-8 text-white text-[20px] rounded-t-2xl rounded-br-2xl font-[500] tracking-[1px]">
                    <i>„Я считаю, что в футболе, как и в любом другом виде спорта, действуют те же правила, что и в жизни. Он научил меня тому, что я могу добиться своей цели упорной работой, настойчивостью и решимостью.“</i>
                </p>
            </SwiperSlide>
            <SwiperSlide className="tip gap-8 p-8 ">
                <img src="/Maycle.png" alt="" />
                <p className=" bg-[#484848] px-6 pt-2 pb-8 text-white text-[20px] rounded-t-2xl rounded-br-2xl font-[500] tracking-[1px]">
                    <i>„Формула нормальной жизни не обходится без спорта.“</i>
                </p>
            </SwiperSlide>
            <SwiperSlide className="tip gap-8 p-8 ">
                <img src="/Shak.png" alt="" />
                <p className=" bg-[#484848] px-6 pt-2 pb-8 text-white text-[20px] rounded-t-2xl rounded-br-2xl font-[500] tracking-[1px]">
                    <i>"Сегодня я буду делать то, что другие не делают, чтобы завтра я смог достичь того, чего другие не могут".</i>
                </p>
            </SwiperSlide>
        </Swiper>
    );
}

export default Tips;<>

</>