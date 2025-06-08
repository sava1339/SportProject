import { useState } from 'react'
import './App.css'
import CalcProgress from './Components/CalcProgress'
import CalcWeight from './Components/CalcWeight'
import Header from './Components/Header'
import Main from './Components/Main'
import Tag from './Components/Tag'
import LoginMenu from './Components/LoginMenu'
import Tips from './Components/Tips'
import SportFood from './Components/SportFood'
import Footer from './Components/Footer'

function App() {
  const [IsRegistration,setIsRegistration] = useState(false);
  const OpenRegistratonMenu = ()=>{
    setIsRegistration(!IsRegistration);
  }
  const [PM,setPM] = useState<number>();
  const recalculate = (weight:number,repeat:number) =>{
      setPM(Math.round(weight*(1+0.0333*repeat)));
  }
  return (
    <>
      <Header openLogin={OpenRegistratonMenu} />
      <Main/>
      <Tag title='Калькулятор прогресса' desc='Рассчитайте свой прогресс на основе начального и текущего веса' />
      <CalcProgress/>
      <Tag title='Калькулятор максимального веса' desc='Рассчитайте свой максимум (1ПМ) на основе веса и количества повторений' />
      <CalcWeight PM={PM} setPM={recalculate} />
      <Tag title='Цитаты и советы' desc='Цитаты и советы известных спортсменов' />
      <Tips/>
      <Tag title='Спортивное питание' desc='Краткий курс и проверенные бренды' />
      <SportFood/>
      <Footer/>
      {IsRegistration && <div className='bg-black opacity-60 absolute top-0 left-0 w-full h-full'></div>}
      {IsRegistration && <LoginMenu openLogin={OpenRegistratonMenu} />}
    </>
  )
}

export default App
