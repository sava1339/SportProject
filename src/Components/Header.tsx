interface props{
    openLogin: () => void;
}
const Header:React.FC<props> = ({openLogin})=> {
    return ( 
        <div className="bg-[#D9D9D9]">
            <nav 
            className="max-w-[1440px] m-auto flex justify-between gap-4 items-center  px-[2em] py-4 font-[600]"
            >
                <a className="nav-link" href="">О нас</a>
                <a className="nav-link" href="">Контакты</a>
                <a className="nav-link" href="">Служба помощи</a>
                <a className="nav-link" href="">Остальное</a>
                <div className="flex-1"></div>
                <img className="w-6" src="telephone.svg" alt="" />
                <p className="nav-link">+7(905)95-81-5</p>
                <a onClick={openLogin} className="nav-link" href="#">Регистрация</a>
                <a onClick={openLogin} className="nav-link" href="#">Войти</a>
            </nav>
        </div>
        
     );
}

export default Header;