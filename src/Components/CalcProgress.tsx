import { useState } from "react";

interface res{
    date:string,
    weight:number,
    change:number,
    action:string
}

function CalcProgress() {
    const hashResult:number[] = [];
    const [weightStart,setWeightStart] = useState<number>();
    const [repeatStart,setRepeatStart] = useState<number>();
    const [weightEnd,setWeightEnd] = useState<number>();
    const [repeatEnd,setRepeatEnd] = useState<number>();
    const [dateStart,setDateStart] = useState<string>();
    const [dateEnd,setDateEnd] = useState<string>("");
    const [result,setResult] = useState<res[]>([]);
    const [curResult,setCurResult] = useState<number>();
    const recalculate = () =>{
        const pmStart:number = weightStart && repeatStart && (weightStart*(1+0.0333*repeatStart)) || 0;
        const pmEnd:number = weightEnd && repeatEnd && (weightEnd*(1+0.0333*repeatEnd)) || 0;
        const procent:number = pmEnd/100-pmStart/100;
        setCurResult(+(procent*100).toFixed(2));
    }
    return ( 
        <div id="progress" className="relative max-w-[1440px] m-auto">
            <img className="w-full" src="/CalcProgress.png" alt="" />
            <div className="calc-content w-full flex flex-col gap-4 px-16 absolute top-[50%] left-[50%] ">
                <div className="flex gap-4 justify-between w-full">
                    <div className="bg-[#6D6D6DE5] w-1/2 py-4 px-6 text-white rounded-[15px] flex flex-col items-center">
                        <p className="font-[800] text-[16px w-full text-start">Введите данные</p>
                        <div className="my-2  w-full">
                            <div className="flex justify-between gap-8 w-full">
                                <div>
                                    <p className="my-2 font-[800] text-[11px]">Начальный вес</p>
                                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setWeightStart(+e.currentTarget.value)}} placeholder="80" className= "  py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="number" />
                                    <p className="my-2 font-[800] text-[11px]">Количество повторений</p>
                                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setRepeatStart(+e.currentTarget.value)}} placeholder="10" className=" py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="number" />
                                </div>
                                <div>
                                    <p className="my-2 font-[800] text-[11px]">Дата</p>
                                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setDateStart(e.currentTarget.value)}} className=" bg-[#4d4d4d] py-1 px-2  rounded-[5px] mt-1" type="text" />
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div>
                                    <p className="my-2 font-[800] text-[11px]">Текущий вес</p>
                                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setWeightEnd(+e.currentTarget.value)}} placeholder="80" className=" py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="number" />
                                    <p className="my-2 font-[800] text-[11px]">Количество повторений</p>
                                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setRepeatEnd(+e.currentTarget.value)}} placeholder="10" className=" py-1 px-2  bg-[#4d4d4d] rounded-[5px] mt-1" type="number" />
                                </div>
                                <div>
                                    <p className="my-2 font-[800] text-[11px]">Дата</p>
                                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setDateEnd(e.currentTarget.value)}} className=" bg-[#4d4d4d]  py-1 px-2 rounded-[5px] mt-1" type="text" />
                                </div>
                            </div>
                        </div>
                        <button onClick={recalculate} className="text-[12px] font-[800] px-16 py-2 my-4 bg-[#4d4d4d] rounded-[5px]">Рассчитать прогресс</button>
                    </div>
                    <div className="bg-[#6D6D6DE5] relative w-1/2 py-4 px-6 text-white rounded-[15px]">
                        <p className="text-[16px] font-[800]">Результаты</p>
                        {curResult != undefined ? 
                        <div>
                            <p className="text-center">Ваш прогресс: {curResult}%</p>
                            <p className="mt-4">
                                {curResult > 0 ? 
                                "Хорошая работа! Ваш прогресс увеличился с последнего раза"
                                :
                                "Кажеться прогресс понизился, вам стоит больше тренероваться"
                                }
                            </p>
                            <p className="mt-8">
                                Текст который должен говорить о том, что вам нужно сделать и каким рекомендация следовать
                            </p>
                        </div>
                        :
                        <div className="absolute left-[50%] top-[50%] calc-content">
                            <img className="w-[72px] m-auto bg-[#575757] rounded-[4em] p-3" src="/results.svg" alt="" />
                            <p className="text-center font-[600] text-[12px] mt-4">Введите данные о весе и нажмите “Рассчитать прогресс”</p>
                        </div>
                        }
                    </div>
                </div>
                <div className="bg-[#6D6D6DE5] py-4 px-6 text-white w-full rounded-[15px]">
                    <div className="flex justify-between mb-4 gap-4 items-center ">
                        <p className="text-[16px] font-[800]">История изменений</p>
                        <div className="flex-1"></div>
                        <button onClick={()=>curResult && weightEnd && dateEnd && setResult(a => [...a,{date:dateEnd,weight:weightEnd,change:curResult,action:curResult > 0 ? "Продолжай в том же духе" : "Нужно больше тренероваться"}])} className="text-[12px] font-[800] px-16 py-2 bg-[#4d4d4d] rounded-[5px] ">Сохранить запись</button>
                        <button onClick={()=>setResult([])} className="text-[12px] font-[800] px-16 py-2 bg-[#4d4d4d] rounded-[5px] ">Очистить историю</button>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Вес(кг)</th>
                                <th>Изменения</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        {result.length > 0 && 
                            <tbody>
                                {result.map(el=>(
                                    <tr>
                                        <td>{el.date}</td>
                                        <td>{el.weight}</td>
                                        <td>{el.change}%</td>
                                        <td>{el.action}</td>
                                    </tr>
                                ))}
                            </tbody>
                        }
                    </table>
                    {result.length < 1 && 
                        <p className="font-[800] w-full text-[18px] text-gray-300 text-center border-x-[1px] border-b-[1px] border-collapse border-[#414141] py-12">Нет сохранённых записей</p>
                    }
                </div>

            </div>
        </div>
     );
}

export default CalcProgress;