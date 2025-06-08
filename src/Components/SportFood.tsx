function SportFood() {
    return ( 
        <div id="food" className="max-w-[1440px] m-auto relative sportfood">
            <img className="w-full" src="/CalcProgress.png" alt="" />
            <div className='shadow absolute top-0 w-full h-full bg-black '></div>
            <div className="absolute top-0 grid grid-cols-3 gap-16  p-16 text-white">
                <div className="flex flex-col gap-2 items-center relative">
                    <div className="relative">
                        <img className="h-[200px]" src="/drug2.png" alt="" />
                        <p className="absolute right-[-60px] top-4 font-bold text-2xl">500г</p>
                    </div>
                    <p className="font-bold text-2xl">Креатин моногидрат Maxler</p>
                    <p className="text-justify text-[21px] font-thin">
                        Креатин — одна из лучших добавок для тех, кто выполняет интенсивные упражнения или занимается интенсивными видами спорта. Он может придать сил для езды на велосипеде, помочь ускорить спринт и даже улучшить прыжки.
    Если вы хотите повысить силу и мощность, креатин поможет вам поднимать более тяжелые веса в тренажерном зале. Он также повышает уровень тестостерона, что способствует наращиванию мышц.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center relative">
                    <div className="relative">
                        <img className="h-[200px]" src="/drug1.png" alt="" />
                        <p className="absolute right-[-10px] top-4 font-bold text-2xl">460г</p>
                    </div>
                    <p className="font-bold text-2xl">Ultimate Nutrition BCAA Powder 12000</p>
                    <p className="text-justify text-[21px] font-thin">
                        В организме ВСАА выполняют две важные функции:
    Снижают уровень усталости. Во время занятий спортом или фитнесом аминокислоты расщепляются и превращаются в источник энергии, соответственно, получается недостаток ВСАА в организме. Это увеличивает концентрацию серотонина в головном мозге, и человек чувствует усталость. За выработку серотонина отвечает аминокислота триптофан, его уровень снижает валин, это позволяет заниматься дольше и не быть выжатым, как лимон после тренировки;
    Способствуют росту общей выносливости организма. Добавки с содержанием ВСАА влияют на восстановление мышечной ткани, костей и кожи за счет изолейцина. .
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center relative">
                    <div className="relative">
                        <img className="h-[200px]" src="/drug3.png" alt="" />
                        <p className="absolute right-[-60px] top-4 font-bold text-2xl">909г</p>
                    </div>
                    <p className="font-bold text-2xl">Optimum Nutrition Whey Gold Standard (ПРОТЕИН) </p>
                    <p className="text-justify text-[21px] font-thin">
                        Протеин продается в виде порошков или капсул, основную массу содержимого составляет белок (его соотношение в продукте зависит от производителя), в меньшем количестве содержатся ВСАА-аминокислоты, а также могут присутствовать углеводы, жиры, ароматизаторы и подсластители. Состав, как правило, сбалансированный, легко усваивается организмом и обеспечивает:
    Быстрое восстановление мышц после тренировок;
    Сохранение мышечной ткани при похудении или подготовке к соревнованиям.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default SportFood;