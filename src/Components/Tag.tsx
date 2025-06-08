interface props{
    title:string, 
    desc:string
}
const Tag: React.FC<props> = ({title,desc}) => {
    return ( 
        <div className="tag text-center max-w-[1440px] m-auto border-t-[1px] border-b-[1px] py-2 border-white">
            <h1 className="text-white font-[700] text-[22px]">{title}</h1>
            <p className="text-white font-[700] text-[11px]">{desc}</p>
        </div>
    );
}

export default Tag;