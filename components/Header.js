export default function Header({title, subtext, showLine, banner}) {
    return (
        <div className={`container mx-auto py-10 text-white ${banner ? 'center':''}`}>
            <h1 className="text-3xl md:text-7xl text-center">{title}</h1>
            {subtext && <p className="text-center italic py-4">{subtext}</p>}
            {showLine && <div className="bg-title-img h-8 bg-no-repeat bg-center" style={{"backgroundSize": '496px 19px'}}></div>}
            
        </div>
    )
}