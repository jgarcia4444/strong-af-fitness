
const Banner = () => {

    return (
        <div className="flex flex-row items-stretch gap-2 h-64">
            <div className="w-1/5 border-2 rounded border-white h-full bg-gray-600"></div>
            <div className="flex flex-col w-3/5 h-full gap-2">
                <div className="w-full border-2 rounded border-white h-1/2 bg-gray-600"></div>
                <div className="w-full border-2 rounded border-white h-1/2 bg-gray-600"></div>
            </div>
            <div className="w-1/5 border-2 rounded border-white h-full bg-gray-600"></div>
        </div>
    )
};

export default Banner;