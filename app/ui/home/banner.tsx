import Image from "next/image";
const Banner = () => {

    return (
        <div className="flex flex-row items-stretch gap-2 h-64">
            <div className=" relative w-1/5 rounded h-full bg-gray-600 border-2 border-white">
                <Image src='/banner-images/vertical-example.jpg' alt='Vertical Gym Image' layout='fill'/>
            </div>
            <div className="flex flex-col w-3/5 h-full gap-2">
                <div className="w-full relative rounded  h-1/2 bg-gray-600 border-2 border-white">
                    <Image src='/banner-images/horizontal-example.jpg' alt="Horizontal gym example" layout="fill" />
                </div>
                <div className="w-full relative rounded  h-1/2 bg-gray-600 border-2 border-white">
                    <Image src='/banner-images/horizontal-example.jpg' alt="Horizontal gym example" layout="fill" />
                </div>
            </div>
            <div className="w-1/5 relative rounded h-full bg-gray-600 border-2 border-white">
                <Image src='/banner-images/vertical-example.jpg' alt='Vertical Gym Image' layout='fill'/>
            </div>
        </div>
    )
};

export default Banner;