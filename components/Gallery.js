import Image from 'next/image'
import GalleryData from '../data/index'
export default function Gallery({showLightBoxHandler}) {
    return (
        <div className="w-100 bg-portfolio-bg h-full h-8 px-20 py-10 mb-5">
            <div className="flex flex-wrap -mx-4 overflow-hidden">
                    {GalleryData.map((item,index)=><div key={item.alt} className="my-4 px-4 w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4" onClick={()=>showLightBoxHandler(index)}>
                        <figure className="border-solid border-20">
                            <Image src={item.url} alt={item.alt}  width={500} height={500}/>
                        </figure>
                    </div>)}
            </div>
      </div>
    )
}