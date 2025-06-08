function Footer() {
    return ( 
        <div className="w-full bg-[#4A4A4A]">
            <div className="w-[1440px] m-auto text-center py-4 text-white flex flex-col px-8">
                <p>Следите за нами в соц сетях</p>
                <div className="flex justify-center gap-8 mt-4">
                    <div className="flex gap-2 items-center">
                        <img className="w-[32px]" src="/insta.svg" alt="" />
                        <p>Instagram</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-[32px]" src="/vk.svg" alt="" />
                        <p>VK</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-[32px]" src="/tg.svg" alt="" />
                        <p>Telegram</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="w-[32px]" src="/youtube.svg" alt="" />
                        <p>Youtube</p>
                    </div>
                </div>
                <div className="flex gap-2 self-end items-center">
                    <img className="w-6" src="telephone.svg" alt="" />
                    <p className="nav-link">+7(905)95-81-5</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;