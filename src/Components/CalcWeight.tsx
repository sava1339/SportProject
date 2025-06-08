import { useState, type ReactHTMLElement } from "react";
interface props{
    PM:number|undefined,
    setPM:(a:number,b:number)=>void
}
const CalcWeight: React.FC<props> = ({PM,setPM}) => {
    const [weight,setWeight] = useState<number>();
    const [repeat,setRepeat] = useState<number>();
    return ( 
        <div id="weight" className="relative max-w-[1440px] m-auto">
            <img className="w-full" src="/CalcWeight.png" alt="" />
            <div className="calc-content w-full flex flex-col gap-4 px-16 absolute top-[50%] left-[50%]">
                <div className="flex gap-4 justify-between">
                    <div className="bg-[#6D6D6DE5] w-1/2 py-4 px-6 text-white rounded-[15px]">
                        <p className="font-[800] text-[16px]">О калькуляторе:</p>
                        <p className="mt-2 font-[800] text-[12px]">
                            Калькулятор использует формулу Брзыцки для расчета максимального веса, который вы можете поднять на одно повторение (1ПМ), основываясь на весе и количестве повторений, которые вы можете выполнить.
                        </p>
                    </div>
                    <div className="bg-[#6D6D6DE5] w-1/2 py-4 px-6 text-white rounded-[15px]">
                        <p className="font-[800] text-[16px]">Справка</p>
                        <p className="mt-2 font-[800] text-[12px]">
                            1ПИ (один повторный максимум) - это максимальный  вес, который вы можете поднять на одно повторение в упражнении.
                        </p>
                    </div>
                </div>
                <div className="bg-[#6D6D6DE5] flex flex-col w-1/2 py-4 px-6 text-white rounded-[15px]">
                    <p className="font-[800] text-[16px]">Введите данные</p>
                    <div className="my-4 flex justify-between">
                        <div>
                            <p className="font-[700] text-[13px]">Рабочий вес (кг)</p>
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setWeight(+e.currentTarget.value)} placeholder="60" className= "  py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="number" />
                        </div>
                        <div>
                            <p className="font-[700] text-[13px]">Количество повторений</p>
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setRepeat(+e.currentTarget.value)} placeholder="10" className= "  py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="number" />
                        </div>
                    </div>
                    <button onClick={()=>setPM(weight,repeat)} className="text-[12px] self-center font-[800] px-16 py-2 mb-4 bg-[#4d4d4d] rounded-[5px]">Рассчитать</button>
                </div>
                <div className="bg-[#6D6D6DE5] flex flex-col w-1/2 py-4 px-6 text-white rounded-[15px]">
                    <p className="font-[700] text-[13px]">Результат:</p>
                    <div className="flex justify-between items-center ">
                        <p className="font-[800] text-[11px]">Ваш примерный 1ПМ: </p>
                        <p className="font-[800] text-[16px]">{PM} кг</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CalcWeight;