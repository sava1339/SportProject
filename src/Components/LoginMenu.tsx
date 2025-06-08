interface props{
    openLogin: () => void;
}
const LoginMenu:React.FC<props> = ({openLogin})=> {
    return ( 
        <div className="bg-[#6D6D6DE5] w-1/2 max-w-[600px] flex flex-col absolute py-4 px-6 text-white rounded-[15px] centered">
            <p onClick={openLogin} className="hover self-end">X</p>
            <p className="text-center text-[16px] mb-8 font-[800]">Регистрация</p>
            <div className="flex justify-between w-full items-center">
                <div className="w-1/2">
                    
                    <p className="font-[700] text-[13px]">Логин</p>
                    <input placeholder="Логин" className= "w-full  py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="text" />
                    <p className="font-[700] mt-4 text-[13px]">Пароль</p>
                    <input placeholder="Пароль" className= "w-full  py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="text" />
                </div>
                <div className="w-1/2">
                    <p className="text-center font-[800] text-[24px]">СТАНЬ ЛУЧШЕ</p>
                    <p className="text-center font-[600] text-[21px]">С НАМИ</p>
                </div>
            </div>
            
            <button className="text-[12px] self-end font-[800] px-16 py-2 mt-16 mb-4 bg-[#4d4d4d] rounded-[5px]">Зарегистрироваться</button>
        </div>
     );
}

export default LoginMenu;