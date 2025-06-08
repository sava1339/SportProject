const Main = ()=> {
    return ( 
        <main className='m-auto max-w-[1440px] relative'>
            <img className='w-full' src="Main.png" alt="" />
            <div className='shadow absolute top-0 w-full h-full bg-black '></div>
            <img className='absolute top-0 main-deco not-lg:hidden' src="main-dec-1.svg" alt="" />
            <div className='absolute main-text w-max top-[20%]'>
            <h1 className='text-white cur-ignore text-center text-6xl tracking-[12px] font-[700]'>СТАНЬ ЛУЧШЕ</h1>
            <h2 className='text-white cur-ignore text-center text-5xl tracking-[12px] font-[600]'>С НАМИ</h2>
            <a href='' className='text-white w-[300px]  text-center mx-auto mt-4 block '>
                Cоветуем зарегестрироваться чтобы ваши данные сохранялись
            </a>
            <div className='main-nav text-white flex justify-center mt-32 gap-8'>
                <a href='#progress'>
                Калькулятор прогресса
                </a>
                <a href='#weight'>
                Калькулятор максимального веса
                </a>
                <a href='#tips'>
                Видео и советы  
                </a>
                <a href='#food'>
                Спортивное питание
                </a>
            </div>
            </div>
        </main>
    );
}

export default Main;